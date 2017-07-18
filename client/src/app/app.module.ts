import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebServiceClient } from './services/webServerClient';
import { HttpModule } from '@angular/http';
import { DatabaseComponent } from './components/database/database.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabaseComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [WebServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
