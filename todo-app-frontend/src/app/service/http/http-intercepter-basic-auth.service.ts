import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler)
  {
    // let username = "in28minutes"
    // let password = "dummy"
    // let basicAuthHeaderString = 'Basic '+ window.btoa(username +':'+ password)
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser()

    //we can't modify the rwquest so we can clone it and proceed to modify the request
    if(basicAuthHeaderString && username){
      request = request.clone ({
        setHeaders: {
          Authorization : basicAuthHeaderString
        }
      })
    }
   
    return next.handle(request)

    //Note: to make this interceptor work : you need add the providers in app.module.ts like below
    // providers: [
    //   {provide: HTTP_INTERCEPTORS, useClass:HttpIntercepterBasicAuthService, multi:true}
    // ]
  }
}
