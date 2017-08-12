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
  declarations: [ // things that you write -- all components
    AppComponent,
    DatabaseComponent,
    CollectionComponent,
    AboutComponent
  ],
  imports: [ // major module that make the app work
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WebServiceClient, ImportantConfig], //services go here 
  bootstrap: [AppComponent]
})
export class AppModule { }
