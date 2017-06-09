import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MongoDB Status Viewer';

  onClick(item) {
    console.log("I was clicked " + item)
  }

}
