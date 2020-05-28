import { Injectable } from '@angular/core';

declare var require: any;

const Keycloak = typeof window !== 'undefined' ? require('keycloak-js') : null;

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
  public keycloakAuth: any;

  constructor() {}

  init() {
    if (Keycloak === null) return null;
    return new Promise((resolve, reject) => {
      const config = {
        url: 'http://localhost:8080/auth',
        realm: 'frontend',
        clientId: 'angular-keycloak-test',
      };
      this.keycloakAuth = new Keycloak(config);
      this.keycloakAuth
        .init({
          checkLoginIframe: false,
          onLoad: 'login-required',
          silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        })
        .success(() => {
          console.log('success');

          resolve();
        })
        .error(() => {
          console.log('error');

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
