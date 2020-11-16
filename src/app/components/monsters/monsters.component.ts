import { MONSTERS } from './../../mock-files/mock-monsters';
import { Component, OnInit } from '@angular/core';
import { Monsters } from 'src/app/models/monsters';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})
export class MonstersComponent implements OnInit {
  monsters: Monsters[] = MONSTERS;
  name: string;
  images = [];
  constructor() {}


  ngOnInit(): void {
  }
}
