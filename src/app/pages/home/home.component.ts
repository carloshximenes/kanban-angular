import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { take } from 'rxjs';
import { KANBAN_LIST } from 'src/app/data/kanban-list';
import { ICard } from 'src/app/interfaces/ICard';
import { ListType } from 'src/app/types/list-types';
import { HomeService } from './home.service';

interface ICardList {
  toDo: ICard[];
  doing: ICard[];
  done: ICard[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public kanbanList = KANBAN_LIST;

  public cardList: ICardList = {
    toDo: [],
    doing: [],
    done: [],
  };

  private _cardDragged: ICard | null = null;
  public cardSelected: ICard | null = null;
  public showModalCardDetail: boolean = false;

  constructor(
    private _service: HomeService,
    private _messageService: MessageService,
    private _confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.getCards();
  }

  private getCards(): void {
    this._service
      .getCards()
      .pipe(take(1))
      .subscribe((data: ICard[]) => this.updateCardList(data));
  }

  private updateCardList(data: ICard[]): void {
    this.cardList = {
      toDo: data.filter((card) => card.lista === 'toDo'),
      doing: data.filter((card) => card.lista === 'doing'),
      done: data.filter((card) => card.lista === 'done'),
    };
  }

  public dragStart(card: ICard) {
    this._cardDragged = card;
  }

  public drop(targetListId: ListType) {
    this.dropValidationHandler(targetListId);
    if (this._cardDragged) {
      if (this._cardDragged.lista === targetListId) {
        return;
      }
      let newCard = { ...this._cardDragged, lista: targetListId };
      this._service
        .updateCard(newCard)
        .pipe(take(1))
        .subscribe({
          next: (data) => {
            this._messageService.add({
              severity: 'success',
              detail: 'Card atualizado com sucesso',
            });
            this.getCards();
          },
          error: (_) => {
            this._messageService.add({
              severity: 'error',
              detail:
                'Não foi possível mover o card selecionado, tente novamente.',
            });
          },
        });
      this._cardDragged = null;
    }
  }

  public dragEnd() {
    this._cardDragged = null;
  }

  private dropValidationHandler(targetListId: ListType): void {
    if (this._cardDragged) {
      const { lista } = this._cardDragged;
      let listDataObject = this.kanbanList.find(
        (k) => k.value === targetListId
      );
      let dropIsValid = listDataObject?.droppableOrigin.find(
        (i) => i === lista
      );

      if (!dropIsValid) {
        this._messageService.add({
          severity: 'warn',
          detail:
            'Só é possível movimentar cards para as listas adjacentes a atual',
        });
        this.dragEnd();
      }
    }
  }

  public removeCardHandler(card: ICard): void {
    this._confirmationService.confirm({
      message:
        'Você está certo de que deseja excluir esse card, essa ação não pode ser desfeita?',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      rejectButtonStyleClass: 'mr-2',
      accept: () => {
        this.removeCard(card);
      },
    });
  }

  public removeCard(card: ICard): void {
    this._service
      .removeCard(card)
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          this.updateCardList(data);
          this._messageService.add({
            severity: 'success',
            detail: 'Card selecionado foi removido com sucesso',
          });
        },
        error: (_) => {
          this._messageService.add({
            severity: 'error',
            detail:
              'Não foi possível remover o card selecionado, tente novamente.',
          });
        },
      });
  }

  public openModalNewCard(): void {
    this.cardSelected = null;
    this.showModalCardDetail = true;
  }

  public modalCardCloseHandler(card: ICard | null) {
    this.showModalCardDetail = false;
    if (card) {
      this._service
        .addCard(card)
        .pipe(take(1))
        .subscribe({
          next: (_) => {
            this.getCards();
            this._messageService.add({
              severity: 'success',
              detail: 'Card adicionado com sucesso',
            });
          },
          error: (_) => {
            this._messageService.add({
              severity: 'error',
              detail: 'Erro ao adicionar novo card, tente novamente.',
            });
          },
        });
    }
  }

  public editCardHandler(card: ICard) {
    this.cardSelected = card;
    this.showModalCardDetail = true;
  }
}
