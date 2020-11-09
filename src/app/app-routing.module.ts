import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { EncounterComponent } from './encounter/encounter.component';
import { MatFormField } from '@angular/material/form-field';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'encounter',
    component: EncounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
