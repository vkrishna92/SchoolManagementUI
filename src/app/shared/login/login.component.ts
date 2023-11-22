import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginDto } from '../models/loginDto';
import { AuthService } from '../services/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserInfo } from '../models/UserInfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  isLoading = false;
  loginForm = new FormGroup({
    email: new FormControl(),
    password : new FormControl()
  });

  /**
   *
   */
  constructor(private authService: AuthService, private notification: NzNotificationService, private router: Router) {    

  }
  ngOnInit(): void {
    this.authService.logout();
  }

  clickLogin(){
    let loginDto = new LoginDto();
    this.isLoading = true;
    if(this.loginForm.valid && this.loginForm.touched){
      loginDto.userName = this.loginForm.controls['email'].value;
      loginDto.password = this.loginForm.controls['password'].value;
      console.log(this.loginForm.value);
      this.authService.login(loginDto).subscribe(x =>{      
        this.isLoading = false;
        localStorage.setItem('token',x['token']);        
        this.authService.setUsername();
        this.authService.setAuthenticated(true);
        this.router.navigate(['/home']);
      }, err=>{    
        this.isLoading = false;
        this.notification.create(
          'error',
          'Login Failed.',
          'Invalid username or password.'
        );
      })
    }        
  }

  


}
