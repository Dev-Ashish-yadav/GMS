import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { ViewMemberComponent } from './view-member/view-member.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  {
    path :"",
    component : HomeComponent
  },
  {
    path :"home",
    component : HomeComponent
  },
  {
    path:"add-member",
    component: CreateMemberComponent
  },
  {
    path:"edit-member/:id",
    component: CreateMemberComponent
  },
  {
    path:"view-member",
    component: ViewMemberComponent
  },
  {
    path:"message",
    component: MessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
