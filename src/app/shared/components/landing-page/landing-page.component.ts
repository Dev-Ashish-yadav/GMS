import { Component } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(
    public appService : AppService
  ) {
    
  }

  
  sideBarOpenClose(event:boolean){
    this.appService.sideBarStatus.set(event);
  }
}
