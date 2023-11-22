import { Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Student } from 'src/app/student/models/Student';
import { Teacher } from '../models/Teacher';
import { TeacherService } from '../services/teacher.service';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-teacher-grid',
  templateUrl: './teacher-grid.component.html',
  styleUrls: ['./teacher-grid.component.css']
})
export class TeacherGridComponent implements OnInit {
  
  public columnDefs: ColDef[] = [
    { field: 'id', headerName:'id', hide:true},
    { field: 'firstName', headerName:'First name' },
    { field: 'lastName', headerName:'Last name' },    
    { field: 'dateOfBirth', headerName:'Date of birth' },
    {field:'gender', headerName:'Gender', },
    {field:'email'}
  ];
  public rowData$: Observable<Teacher[]>;
  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  //selected teacher Record
  selectedTeacher : Teacher;

  /**
   *
   */
  constructor(private teacherService: TeacherService, private router: Router, private notification: NzNotificationService) {    
  }

  ngOnInit(): void {
    
  }
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.teacherService.getAll();
  }
  onRowSelected(event:any){
    console.log(event.data);
    this.selectedTeacher = event.data;
  }
  clickEdit(){
    this.router.navigate(['/teacher/'+this.selectedTeacher.id]);
  }
}
