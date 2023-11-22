import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { LoginDto } from '../models/loginDto';
import jwt_decode from "jwt-decode";
import { UserInfo } from '../models/UserInfo';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl = environment.apiUrl +"Auth/"
  private username$ = new BehaviorSubject<string>('');
  private isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient,private jwtHelper: JwtHelperService) { }

  login(loginDto: LoginDto){
    return this.http.post<any>(this.baseurl+"login",loginDto);
  }

  logout(){
    localStorage.removeItem('token')    
    localStorage.removeItem('username');
    this.setUsername();
  }

  getUserInfo(){
    if(localStorage.getItem('token')){
      let _token = localStorage.getItem('token')
      console.log(_token);
      let userInfo :UserInfo = jwt_decode(_token as string);
      return userInfo;
    }    
    return null;
  }

  isSessionExpired(){    
    if(localStorage.getItem('token')){
      let _token = localStorage.getItem('token') as string;
      
      let expirationDateTime  = this.jwtHelper.getTokenExpirationDate(_token) as Date;
      let currentDate = new Date();
      if(currentDate > expirationDateTime){
        return true;
      }
      return false;
    }   
    return true;
  }

  setUsername(){
    if(localStorage.getItem('token')){
      let _token = localStorage.getItem('token')
      console.log(_token);
      let userInfo :UserInfo = jwt_decode(_token as string);
      localStorage.setItem('username',userInfo.unique_name);
      this.username$.next(userInfo.unique_name);        
    }else{
      this.username$.next('');        
    }      
  }
  getUsername() {
    return this.username$.asObservable();
  }

  // Set user authentication state
  setAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticated.next(isAuthenticated);
  }

  // Get user authentication state
  getAuthenticated() {
    return this.isAuthenticated.asObservable();
  }
}
