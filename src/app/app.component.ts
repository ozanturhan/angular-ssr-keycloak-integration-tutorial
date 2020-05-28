import { Component, OnInit } from '@angular/core';
import { KeycloakService } from './keycloak.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'keycloak';

  constructor(private service: KeycloakService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(console.log);
  }
}
