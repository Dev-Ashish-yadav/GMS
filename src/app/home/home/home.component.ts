import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  allMemberData:any = [];
  activeMemberData:any = [];
  inactiveMemberData:any=[];

  memberList:any=[];

  constructor(
    private appService : AppService
  ){}

  ngOnInit(): void {
    this.setMemberList(0,0,0);
    this.getAllMemberData();
  }

  getAllMemberData(){
    this.activeMemberData = [];
    this.inactiveMemberData = [];
    this.allMemberData = [];
    this.allMemberData = this.appService.getData();
    this.allMemberData.forEach((element:any) => {
      if(element.status){
        this.activeMemberData.push(element);
      }else{
        this.inactiveMemberData.push(element)
      }
    });

    this.setMemberList(this.allMemberData.length,this.activeMemberData.length,this.inactiveMemberData.length);
  }

  setMemberList(all:number,active:number,inactive:number){
   this.memberList = [
      {
        title:"All Member",
        count:all,
        icon:'',
        className:"allmember"
      },
      {
        title:"Active Member",
        count:active,
        icon:'',
        className:"activemember"
      },
      {
        title:"Inactive Member",
        count:inactive,
        icon:'',
        className:"inactivemember"
  
      },
    ]
  }

}
