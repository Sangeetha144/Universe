import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './components/share/share.component';
import { FabricComponent } from './fabric.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CreatedbComponent } from './components/createdb/createdb.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';

const routes: Routes = [
  {
    path : '',
    component :FabricComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'share',
        component:ShareComponent
      },
      {
        path:'db',
        component:CreatedbComponent
      }
    ]
  },
 
 
  
];


@NgModule({
  declarations: [
    ShareComponent,
    FabricComponent,
    SidenavComponent,
    CreatedbComponent,
    DashboardComponent,
  
  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    NgApexchartsModule
  ]
})
export class FabricModule { }
