import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-jquery';
  hola: string;

  ngOnInit(): void {
    $.ajax('http://localhost:4200/admin', 
    {
      contentType: 'application/json', 
      method: 'GET'
    }).then(e => console.log(e));
    console.log('asdfasdf');
  }
}
