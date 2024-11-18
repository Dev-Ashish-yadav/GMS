import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ViewMemberComponent } from './view-member/view-member.component';
import { MatTableDataSource } from '@angular/material/table';
import {  MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MessageComponent } from './message/message.component';
@NgModule({
  declarations: [
    HomeComponent,
    CreateMemberComponent,
    ViewMemberComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatButtonModule,
    SharedModule
  ],
  
})
export class HomeModule { }
