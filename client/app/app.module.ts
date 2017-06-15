import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/heroDetail/hero-detail.component';

import { TableService } from './services/hero.service';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent
  ],
  providers: [
    TableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
