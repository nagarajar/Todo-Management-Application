import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username = 'in28minute'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //2. To get router dependency we need declare inside constructor
  // Dependency Injection
  constructor(private router: Router,
    public hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  // Using hardcoded service
  handleLogin() 
  {
    //console.log(this.username);
    // if(this.username==="in28minute" && this.password==="dummy")
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password))
    {
        //1. Redirect to welcome page using router dependency 
        //3. using navigate function we can redirect to the required path
        //4. passing path, parameter as input to navigate
        this.router.navigate(['welcome',this.username])
        this.invalidLogin = false
    }
    else
    {
        this.invalidLogin = true
    }
  }

  // using basic auth service - currently we are using this
  handleBasicAuthLogin()
  {
    
    // Instead of using if and else - it will be a hard coded type
    // so we can use observables to achive the same
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
    .subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome',this.username])
        this.invalidLogin = false
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
      
    )
  }

    // using basic auth service - currently we are using this with JWT
    handleJWTAuthLogin()
    {
      
      // Instead of using if and else - it will be a hard coded type
      // so we can use observables to achive the same
      this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome',this.username])
          this.invalidLogin = false
        },
        error => {
          console.log(error)
          this.invalidLogin = true
        }
        
      )
    }
      
}
