import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentGridComponent } from './student-grid/student-grid.component';
import { SharedModule } from '../shared/shared.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { EditStudentComponent } from './edit-student/edit-student.component';
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
import { StudentBulkUploadComponent } from './student-bulk-upload/student-bulk-upload.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [
    StudentGridComponent,
    EditStudentComponent,
    StudentBulkUploadComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AgGridModule,
    FormsModule,
    NzInputModule,
    NzFormModule,
    NzSpinModule,
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
    NzUploadModule,
    NzTabsModule,
    NzProgressModule
  ]
})
export class StudentModule { }
