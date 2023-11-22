import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'SchoolManagementUI';
  /**
   *
   */
  constructor(private authservice: AuthService, private i18n: NzI18nService) {    

  }
  ngOnInit(): void {
    
    this.i18n.setLocale(en_US);
    console.log("App Component");
  }
}
