import {Component} from '@angular/core';
import {KeycloakService} from './keycloak.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keycloak';

  constructor(private service: KeycloakService, private httpClient: HttpClient) {
  }

  removeSession() {
    this.httpClient.get('http://ec2-18-218-213-65.us-east-2.compute.amazonaws.com:8081', {
      headers: {
        'Authorization': 'Bearer ' + this.service.getToken()
      }
    }).subscribe(console.log);
  }
}
