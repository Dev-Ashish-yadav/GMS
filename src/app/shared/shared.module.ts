import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { SplitCamelCasePipe } from './pipes/split-camel-case.pipe';

const componentList = [
  LandingPageComponent,
  SideMenuComponent,
  HeaderComponent,
  FooterComponent,
  PageNotFoundComponent
];

const materialImport = [
    MatSidenavModule,
    MatIconModule
];

@NgModule({
  declarations: [
    ...componentList,
    SplitCamelCasePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    ...materialImport
  ],
  exports:[
    ...componentList,
    SplitCamelCasePipe
  ]
})
export class SharedModule { }
