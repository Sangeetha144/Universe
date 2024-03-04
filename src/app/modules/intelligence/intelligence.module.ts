import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserActivityComponent } from './components/user-activity/user-activity.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { TileComponent } from './components/tile/tile.component';
import { IntelligenceComponent } from './components/intelligence/intelligence.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { IntelligentComponent } from './intelligent.component';
import { NgApexchartsModule } from 'ng-apexcharts';

const routes: Routes = [
  {
    path : '',
    component:IntelligentComponent,
    children:[
      {
        path:'intelligence',
        component:IntelligenceComponent 
       },
       {
        path:'tile',
        component:TileComponent
       },
       {
        path:'user-activity',
        component:UserActivityComponent
       },
    ]
  }
 
 
  
];

@NgModule({
  declarations: [
    UserActivityComponent,
    PieChartComponent,
    LineChartComponent,
    TileComponent,
    IntelligenceComponent,
    TableComponent,
    IntelligentComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgApexchartsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class IntelligenceModule { }
