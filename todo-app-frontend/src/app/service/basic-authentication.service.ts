import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL } from '../app.constant';

// when we are using a variable lot time its better to go with constant
export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  //Hard coded authentication
  executeAuthenticationService(username:any, password:any)
  {
    let basicAuthHeaderString = 'Basic '+ window.btoa(username +':'+ password)
    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString})

    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`,
      {headers}).pipe(
        // using pipe - if the authentication is success we can set something(username) under session storage
        // then return the data(repsonse) back to the user(requester)
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username)
            sessionStorage.setItem(TOKEN, basicAuthHeaderString)
            return data
          }
      )
    )
  }

  //Using JWT authentication 
  executeJWTAuthenticationService(username:any, password:any)
  {
  
    return this.http.post<any>(
      `${API_URL}/authenticate`,
      {
        username,
        password
      }).pipe(
        // using pipe - if the authentication is success we can set something(username) under session storage
        // then return the data(repsonse) back to the user(requester)
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username)
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`)
            return data
          }
      )
    )
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken(){
    return sessionStorage.getItem(TOKEN)
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }
}

export class AuthenticationBean 
{
  constructor(public message:String)
  {

  }
}