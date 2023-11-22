import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { HomeComponent } from './home/home.component';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { StudentModule } from './student/student.module';
import { AgGridModule } from 'ag-grid-angular';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { TeacherModule } from './teacher/teacher.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,    
    SharedModule,   
    StudentModule,
    TeacherModule,
    AgGridModule,
    NzDatePickerModule,
    NzIconModule,NzNotificationModule,
    AppRoutingModule
  ],
  providers: [ { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
