import { Component, OnInit } from '@angular/core';
import { WebServiceClient } from '../../services/webServerClient';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  booksCollection: any = [];

  constructor(private ws: WebServiceClient) { }

  ngOnInit() {
    this.ws.getResource("find").subscribe(data => {
      this.booksCollection = data;
      console.log("data", data, "booksCollection", this.booksCollection);
    });
  }

}
