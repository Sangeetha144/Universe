import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  isHomePage: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // Listen to route changes to detect home page
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isHomePage = this.activatedRoute.snapshot.firstChild?.routeConfig?.path === 'landing';
    });
  }

  isLoggedIn() {
    return sessionStorage.getItem('loggedIn') === 'true';
  }
}
