import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public userIsLogged: boolean = false;

  @Output() newCardClickEvent = new EventEmitter<any>();

  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
    this.userIsLogged = !!this._auth.getAuthToken();
  }

  public addNewCard() {
    this.newCardClickEvent.emit();
  }
}
