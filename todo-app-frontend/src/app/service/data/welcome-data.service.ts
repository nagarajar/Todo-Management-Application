import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constant';

export class HelloWorldBean{
  constructor(public message:String){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService(){
    //console.log("executeHelloWorldBeanService")
   return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`)
  }

  executeHelloWorldServiceWithPathVariable(name:any)
  {
    //console.log("executeHelloWorldBeanService")
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader()
    // let headers = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    //   })

    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/pathvariable/${name}`)
    //{headers})
  }

  // createBasicAuthenticationHttpHeader(){
  //   let username = "in28minutes"
  //   let password = "dummy"
  //   let basicAuthHeaderString = 'Basic '+ window.btoa(username +':'+ password)
  //   return basicAuthHeaderString
  // }
  //1st time
  //Access to XMLHttpRequest at 'http://localhost:8080/hello-world/pathvariable/in28minutes' 
  //from origin 'http://localhost:4200' has been blocked by CORS policy: 
  //No 'Access-Control-Allow-Origin'header is present on the requested resource.

  //2nd time
  //in28minutes:1 Access to XMLHttpRequest at 'http://localhost:8080/hello-world/pathvariable/in28minutes' 
  //from origin 'http://localhost:4200' has been blocked by CORS policy: 
  //Response to preflight request doesn't pass access control check:
  //No 'Access-Control-Allow-Origin' header is present on the requested resource.


}
