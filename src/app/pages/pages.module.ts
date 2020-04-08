import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { GraphicsComponent } from '../pages/graphics/graphics.component';
import { PagesComponent } from '../pages/pages.component';
import { ProgressComponent } from '../pages/progress/progress.component';



@NgModule({
  declarations: [
    DashboardComponent,
    GraphicsComponent,
    PagesComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    GraphicsComponent,
    PagesComponent,
    ProgressComponent
  ]
})
export class PagesModule { }
