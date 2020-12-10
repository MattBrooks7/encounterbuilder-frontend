import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

@Component({
  selector: 'app-add-monster',
  templateUrl: './add-monster.component.html',
  styleUrls: ['./add-monster.component.scss']
})
export class AddMonsterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
