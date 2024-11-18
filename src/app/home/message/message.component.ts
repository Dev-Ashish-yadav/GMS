import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  constructor(){}
  emailList:any=[
    "Ram@gmail.com",
    "Shyam@gmail.com",
    "Mahadev@gmail.com",
    "Vishnu@gmail.com",
    "Ashish@gmail.com",
  ]
}
