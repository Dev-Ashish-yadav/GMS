import { Component } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    private appService : AppService,
    private route : Router
  ){}

  toggleSideBar(){
    this.appService.sideBarStatus.set(!this.appService.sideBarStatus());
  }

  logout(){
    this.route.navigate(['/'])
  }
}
