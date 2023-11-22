import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  /**
   *
   */
  isVisible = false;    
  sidenavOpen = false;
  username$ : Observable<string>;
  isAuthenticated = false;
  constructor(private authService: AuthService, private router: Router) {        
    this.username$ = authService.getUsername();
  }
  ngOnInit(): void {
    console.log("NavBar comp")
    if(localStorage.getItem('username')){
      this.authService.setUsername();
    }
    this.authService.getAuthenticated().subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
    this.isVisible = !this.authService.isSessionExpired();   
  }

  clickMenu(){

  }

  open(): void {
    this.sidenavOpen = true;
  }

  close(): void {
    this.sidenavOpen = false;
  }

  clickLogout(){
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
