import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICard } from 'src/app/interfaces/ICard';

@Component({
  selector: 'app-modal-card-detail',
  templateUrl: './modal-card-detail.component.html',
  styleUrls: ['./modal-card-detail.component.scss'],
})
export class ModalCardDetailComponent implements OnInit {
  public form!: FormGroup;

  @Input() showModal: boolean = false;
  @Input() card: ICard | null = null;
  @Output() modalActionResult = new EventEmitter<ICard | null>();

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this._fb.group({
      id: [this.card?.id || null],
      title: [this.card?.titulo || null, Validators.required],
      description: [this.card?.conteudo || null, Validators.required],
      list: [this.card?.lista || null],
    });
  }

  public checkIfFieldIsTouchedAndInvalid(field: string): boolean {
    let isTouched = !!this.form.get(field)?.touched;
    let isInvalid = !!this.form.get(field)?.invalid;

    return isTouched && isInvalid;
  }

  public submitForm(): void {
    this.form.markAllAsTouched();
    if (!this.form.valid) {
      return;
    }

    const { id, title, description, list } = this.form.getRawValue();

    let newCard: ICard = {
      id,
      titulo: title,
      conteudo: description,
      lista: id ? list : 'toDo',
    };

    this.modalActionResult.emit(newCard);
    this.form.reset();
  }

  public closeModal(): void {
    this.modalActionResult.emit(null);
    this.form.reset();
  }
}
