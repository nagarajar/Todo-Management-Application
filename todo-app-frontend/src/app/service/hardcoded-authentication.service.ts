import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  
  authenticate(username:any, password:any){
   // console.log('before '+ this.isUserLoggedIn())
    if(username==="in28minute" && password==="dummy"){
      sessionStorage.setItem('authenticaterUser', username)
    //  console.log('before '+ this.isUserLoggedIn())
      return true
    }
    return false
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
}
