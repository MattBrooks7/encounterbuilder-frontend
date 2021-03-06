import { MonstersService } from './shared/services/monsters.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { EncounterComponent } from './components/encounter/encounter.component';
import { BuilderComponent } from './components/builder/builder.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MonstersComponent } from './components/monsters/monsters.component';
import { MatTableModule } from '@angular/material/table'; 
import {MatExpansionModule} from '@angular/material/expansion';
import { AddMonsterComponent } from './components/add-monster/add-monster.component';
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    EncounterComponent,
    BuilderComponent,
    MonstersComponent,
    AddMonsterComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTableModule,
    MatExpansionModule,
    MatInputModule
  ],
  providers: [
    MonstersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
