import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { ButtonComponent } from './button/button.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {
    path : '',
    component : ButtonComponent
  },
 
  {
    path : 'landing',
    component : LandingComponent
  },
 
   {
    path:'login',
    component:LoginComponent
   },
   {
    path:'register',
    component:RegistrationComponent
   },
   
   {
    path:'intelligence',
    loadChildren:()=>import('./modules/intelligence/intelligence.module').then(x=>x.IntelligenceModule)
   },
  
 {
  path:'fabric',
  loadChildren:()=> import('./modules/fabric/fabric.module').then(x=>x.FabricModule)
 }

   
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
