import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name=''
  welcomeMessageFromService:String=''

  //ActivetedRoute - used to pass parameter then use them
  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage()
  {
    //console.log("Hello World")
    //console.log(this.service.executeHelloWorldBeanService())
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
      );
      
  }

  getWelcomeMessageWithParameter()
  {
    //console.log("Hello World")
   // console.log(this.service.executeHelloWorldServiceWithPathVariable("this.name"))
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
      );
      
  }

  handleSuccessfulResponse(response:any)
  {
    this.welcomeMessageFromService = response.message
    //console.log(response)
    //console.log(response.message)
  }

  handleErrorResponse(error:any){
    // console.log(error)
    // console.log(error.error)
    // console.log(error.error.message)
    this.welcomeMessageFromService = error.error.message
  }
}
