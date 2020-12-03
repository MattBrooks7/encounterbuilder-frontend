import { MonstersService } from './../../shared/services/monsters.service';
import { Component, OnInit } from '@angular/core';
import { Monsters } from 'src/app/models/monsters';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})
export class MonstersComponent implements OnInit {
  monsters: any[] = []
  name: string;
  images = [];
  constructor(
    private monsterService: MonstersService
  ) {}


  ngOnInit(): void {
    this.retrieveAllMonsters()
  }

  retrieveAllMonsters() {
    this.monsterService.getAllMonsters().subscribe(data => {
      debugger
    })
  }
}
