import { Component } from '@angular/core';
import { WebServiceClient } from './services/webServerClient';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mongodb-data-viewer';
  collections;

  constructor(private ws: WebServiceClient) {

  }

  fun() {
    this.ws.getResource('collections.json')
      .subscribe(data => {
        this.collections = JSON.stringify(data);
      });
  }
}
