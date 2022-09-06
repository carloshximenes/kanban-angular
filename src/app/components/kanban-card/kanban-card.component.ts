import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICard } from 'src/app/interfaces/ICard';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss'],
})
export class KanbanCardComponent implements OnInit {
  @Input() card!: ICard;
  @Output() editEventHandler = new EventEmitter<ICard>();
  @Output() deleteEventHandler = new EventEmitter<ICard>();

  constructor() {}

  ngOnInit(): void {}

  public editCardHandler(card: ICard): void {
    this.editEventHandler.emit(card);
  }
  public deleteCardHandler(card: ICard): void {
    this.deleteEventHandler.emit(card);
  }
}
