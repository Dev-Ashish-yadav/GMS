import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  
  sideMenuList:any = [
    {name:"Dashboard" , routing:"home", icon:"home"},
    {name:"Add Member" , routing:"add-member",icon:"add"},
    {name:"View Member" , routing:"view-member",icon:"account_circle"},
    {name:"Message" , routing:"message",icon:"message"},
  ]
  constructor(){}


}
