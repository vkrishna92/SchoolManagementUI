import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [
    NavBarComponent,
    LoginComponent,
    ToolBarComponent,
    BreadCrumbComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzMenuModule,
    NzCardModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzIconModule,
    NzDrawerModule,
    NzNotificationModule,
    NzSpinModule,
    NzDropDownModule,
    NzInputModule,
    NzProgressModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    NavBarComponent, LoginComponent, ToolBarComponent, BreadCrumbComponent, FileUploadComponent
  ]
})
export class SharedModule { }
