import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Student } from '../models/Student';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-student-grid',
  templateUrl: './student-grid.component.html',
  styleUrls: ['./student-grid.component.css']
})
export class StudentGridComponent implements OnInit{

  breadCrumb:string[] = ['Home','Student','Student Details'];
  public columnDefs: ColDef[] = [
    { field: 'id', headerName:'id', hide:true},
    { field: 'firstName', headerName:'First name' },
    { field: 'lastName', headerName:'Last name' },
    { field: 'grade', headerName:'Grade' },
    { field: 'section' },
    { field: 'dateOfBirth', headerName:'Date of birth' },
    {field:'gender', headerName:'Gender', },
    {field:'email'}
  ];
  public rowData$: Observable<Student[]>;
  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  //selected Student Record
  selectedStudent : Student;
  constructor(private studentService: StudentService, private router: Router, private notification: NzNotificationService) {    
    
  }

  // Example load data from server
  onGridReady(params: GridReadyEvent) {
   this.rowData$ = this.studentService.getAll();
  }
  ngOnInit(): void {   
    this.studentService.getAll().subscribe(x=>{
      console.log(x);
    })
  }
  onRowSelected(event:any){
    console.log(event.data);
    this.selectedStudent = event.data;
  }

  clickEdit(){
    if(this.selectedStudent != null){
      this.router.navigate(['student/'+this.selectedStudent.id]);
    }
    else{
      this.notification.warning('Select a student record to edit.','')
    }    
  }
  private _delete(){
    if(this.selectedStudent != null){

      this.studentService.delete(this.selectedStudent.id).subscribe(x=>{
        this.notification.info('Student delete from system.',this.selectedStudent.firstName);
      })
    }
    else{
      this.notification.warning('Select a student record to delete.','')
    }
  }

  confirm(){
    this._delete();
  }
  cancel(){

  }

}
