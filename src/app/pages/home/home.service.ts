import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICard } from 'src/app/interfaces/ICard';
import { AuthService } from 'src/app/services/auth.services';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private _http: HttpClient, private _authService: AuthService) {}

  public getCards(): Observable<ICard[]> {
    let url = `${environment.backendServer}/cards`;
    return this._http.get<ICard[]>(url);
  }

  public addCard(card: ICard): Observable<ICard> {
    let url = `${environment.backendServer}/cards`;
    if(card?.id) {
      return this.updateCard(card);
    }
    return this._http.post<ICard>(url, card);
  }

  public removeCard(card: ICard): Observable<ICard[]> {
    let url = `${environment.backendServer}/cards/${card.id}`;
    return this._http.delete<ICard[]>(url);
  }

  public updateCard(card: ICard): Observable<ICard> {
    let url = `${environment.backendServer}/cards/${card.id}`;
    return this._http.put<ICard>(url, card);
  }
}
