import { Monsters } from 'src/app/shared/models/monsters';
import { Observable, } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
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

   getAllMonsters(): Observable<Monsters[]> {
     return this.http.get<Monsters[]>(`${this.monsterApi}/index`)
   }
}
