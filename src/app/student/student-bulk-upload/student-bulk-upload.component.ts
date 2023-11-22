import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { BehaviorSubject, timeInterval } from 'rxjs';
import { Student } from '../models/Student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-bulk-upload',
  templateUrl: './student-bulk-upload.component.html',
  styleUrls: ['./student-bulk-upload.component.css']
})
export class StudentBulkUploadComponent {
  selectedFile: File | undefined;
  fileContent: string | undefined;
  isLoading = false;

  //Grid Variables
  header:string[] = [];
  columnDef: ColDef[] = [
    { field: 'id', headerName:'id', hide:true},
    { field: 'firstName', headerName:'First name' },
    { field: 'lastName', headerName:'Last name' },
    { field: 'grade', headerName:'Grade' },
    { field: 'section' },
    { field: 'dateOfBirth', headerName:'Date of birth' },
    {field:'gender', headerName:'Gender', },
    {field:'email'}
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  rowDate:Student[] =[];
@ViewChild('agGrid') grid: AgGridAngular;
  /**
   *
   */
  constructor(private notification: NzNotificationService, private studentService: StudentService) {    
  }
  
  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.selectedFile = fileList[0];
      console.log(this.selectedFile);
      this.readFileContent(this.selectedFile);
    }
  }

  readFileContent(file: any) {
    const reader = new FileReader();
    reader.onload = () => {
      
      this.fileContent = reader.result as string;
      const rows:string[] = this.fileContent.split('\n');            
      rows.forEach((element,index) => {   
        if(index != 0){
          let row = element.split(',');
          let student = new Student();
          student.id = 0;
          student.firstName = row[0];
          student.lastName = row[1];
          student.grade = row[2];
          student.section = row[3];
          student.dateOfBirth = new Date(row[4]);
          student.gender = row[5];
          student.email = row[6];
          this.rowDate.push(student);
        }         
      });
      console.log(this.rowDate);

      this.grid.api.setRowData(this.rowDate);      
    };
    reader.readAsText(file);
  }
  

  importData() {
    this.isLoading = true;
    // Implement your data import logic here
    this.studentService.upload(this.rowDate).subscribe(x =>{
      if(x.errorMessages.length > 0){
        this.notification.error('Upload failed.','');
      }
      else{
        this.notification.success('Students uploaded successfully.','');
      }
      this.isLoading = false;
    }, err=>{
      this.isLoading = false;
    })
  }
}
