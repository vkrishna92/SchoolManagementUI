import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './shared/auth.guard';
import { StudentGridComponent } from './student/student-grid/student-grid.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { TeacherGridComponent } from './teacher/teacher-grid/teacher-grid.component';
import { TeacherDetailsComponent } from './teacher/teacher-details/teacher-details.component';
import { StudentBulkUploadComponent } from './student/student-bulk-upload/student-bulk-upload.component';

const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[authGuard]},
  {path:'home', component: HomeComponent, canActivate:[authGuard]},
  {path:'login', component:LoginComponent},
  {path:'student', component:StudentGridComponent, canActivate:[authGuard]},
  {path:'student/:id', component:EditStudentComponent, canActivate:[authGuard]},
  {path:'upload-students', component: StudentBulkUploadComponent, canActivate:[authGuard]},
  {path:'teacher',component:TeacherGridComponent,canActivate:[authGuard]},
  {path:'teacher/:id', component: TeacherDetailsComponent, canActivate:[authGuard]}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
