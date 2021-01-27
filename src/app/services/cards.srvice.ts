import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Card } from "../interfaces/card.interface";

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  constructor(private http: HttpClient) {
  }

  fetchAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>('https://run.mocky.io/v3/');
  }

  fetchCardsByCategoryId(id): Observable<Card[]> {
    return this.http.get<Card[]>(`https://run.mocky.io/v3/${id}`);
  }

}