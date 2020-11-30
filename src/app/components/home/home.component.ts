import { MonstersService } from './../../shared/services/monsters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  monsters: any[] = []
  constructor(
    private monsterService: MonstersService
  ) { }

  ngOnInit(): void {
    this.retrieveAllMonsters()
  }

  retrieveAllMonsters() {
    this.monsterService.getAllMonsters().subscribe(data => {
      debugger
    })
  }

}
