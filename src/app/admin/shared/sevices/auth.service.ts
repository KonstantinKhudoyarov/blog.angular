import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, FBAuthResponse } from 'src/app/shared/interfaces';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  get token(): string {
    return '';
  }

  login(user: User): Observable<any> {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apikey}`, user)
      .pipe(
        tap(this.setToken)
      );
  }

  logout(){}

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(response: FBAuthResponse) {
    console.log(response);
  }
}
