import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../shared/header/header.component';
import { NotfoundComponent } from '../shared/notfound/notfound.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    NotfoundComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    NotfoundComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
