import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
 

  username!: string |null;
 
 
  constructor(private router:Router) {}

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   this.username = params['username'];
     
    // });
     this.username= sessionStorage.getItem('username')
  }
  logout(){
    this.router.navigate([''])
   sessionStorage.removeItem('loggedIn');
   sessionStorage.removeItem('username')
}


}