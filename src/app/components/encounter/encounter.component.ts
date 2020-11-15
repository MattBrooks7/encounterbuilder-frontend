import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterComponent implements OnInit {
  http: HttpClient;
  encounterApi: any;

  constructor() {}

  ngOnInit(): void {
  }

  showAllEncounters() {
    return this.http.get<any>(`${this.encounterApi}/index`);
  }

}
