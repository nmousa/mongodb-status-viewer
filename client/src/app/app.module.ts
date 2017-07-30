import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebServiceClient } from './services/webServerClient';
import { HttpModule } from '@angular/http';
import { DatabaseComponent } from './components/database/database.component';
import { CollectionComponent } from './components/collection/collection.component';
import { AboutComponent } from './components/about/about.component';
import { ImportantConfig } from '../assets/config';

@NgModule({
  declarations: [
    AppComponent,
    DatabaseComponent,
    CollectionComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WebServiceClient, ImportantConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
