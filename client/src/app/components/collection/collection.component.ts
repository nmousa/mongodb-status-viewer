import { Component, OnInit } from '@angular/core';
import { WebServiceClient } from '../../services/webServerClient';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  collections: any = [];

  constructor(private ws: WebServiceClient) { }

  ngOnInit() {
    this.ws.getResource("collections.json").subscribe(data => {
      this.collections = data.collections;
      console.log("data", data, "collections", this.collections)
    });
  }

}
