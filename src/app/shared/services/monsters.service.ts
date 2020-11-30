import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonstersService {
  private monsterApi: string;

  constructor(
    private http: HttpClient
  ) {
    this.monsterApi = `${environment.apiUrl}/monsters`;
   }

   getAllMonsters() {
     return this.http.get<any>(`${this.monsterApi}/index`)
   }
}
