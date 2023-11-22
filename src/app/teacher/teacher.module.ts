import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherGridComponent } from './teacher-grid/teacher-grid.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { AgGridModule } from 'ag-grid-angular';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TeacherGridComponent,
    TeacherDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AgGridModule,
    FormsModule,
    NzInputModule,
    NzFormModule,
    NzPopconfirmModule,
    NzDropDownModule,
    NzDatePickerModule,
    NzAvatarModule,
    NzRadioModule,
    NzSelectModule,
    NzDividerModule,
    NzBreadCrumbModule,
    NzNotificationModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    NzButtonModule,
    NzTabsModule
  ]
})
export class TeacherModule { }
