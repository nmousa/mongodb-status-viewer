import { Component } from '@angular/core';
//import { Http } from '@angular/http';
import {HttpClient}  from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mongodb-data-viewer';
  collections;

  constructor(private http: HttpClient){

  }

  fun(){
    this.http.get('../assets/collections.json')
    .subscribe(data => {
      this.collections = JSON.stringify(data);
    });
  }
}
