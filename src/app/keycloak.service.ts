import {Injectable} from '@angular/core';
import * as KeycloakProxy from 'keycloak-js';

const Keycloak = (KeycloakProxy as any).default || KeycloakProxy;

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  public keycloakAuth: any;

  constructor() { }

  init(): Promise<any> {
    return new Promise((resolve, reject) => {
      const config = {
        'url': 'http://ec2-18-218-213-65.us-east-2.compute.amazonaws.com:8080/auth',
        'realm': 'frontend',
        'clientId': 'angular-keycloak-test'
      };
      this.keycloakAuth = new Keycloak(config);
      this.keycloakAuth.init({ onLoad: 'login-required' })
        .success(() => {
          resolve();
        })
        .error(() => {
          reject();
        });
    });
  }

  getToken(): string {
    return this.keycloakAuth.token;
  }

  getRefreshToken(): string {
    return this.keycloakAuth.refreshToken;
  }
}
