import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { StudentService } from '../services/student.service';
import { Student } from '../models/Student';
import { ActivatedRoute } from '@angular/router';

import { getISOWeek } from 'date-fns';

import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit{
  
  breadCrumb:string[] = ['Home','Student','Student Details'];
  grades = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12']

  studentForm: FormGroup;
  date = null;
  constructor(private fb: FormBuilder,private i18n: NzI18nService, private route:ActivatedRoute, private notification: NzNotificationService, private studentService: StudentService) {
    this.i18n.setLocale(en_US);
    this.studentForm = this.fb.group({
      id: [0],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender : ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required, Validators.min(0)]],
      grade: ['',[Validators.required]],
      section: ['']
    });
  }
  
  ngOnInit(): void {
    let studentId:number =   Number(this.route.snapshot.paramMap.get('id'));
    if(studentId > 0){
      //set student form
      this.studentService.get(studentId).subscribe(x=>{
        this._setStudentDetailsForm(x);
      })
    }
  }

  clickSave(){
    let studentDetails = this._getStudentDetails();
    console.log(studentDetails);
    if (studentDetails.id == 0){
      this.studentService.insert(studentDetails).subscribe(x=>{
        this.notification.success('Student details saved.','',{nzDuration:3000})
      })
    }
    else if(studentDetails.id > 0 ){
      this.studentService.update(studentDetails).subscribe( x=>{
        this.notification.success('Student details saved.',studentDetails.firstName,{nzDuration:3000});
      },err=>{
        this.notification.success('Student details save failed.','',{nzDuration:3000});
      })
    }
    
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  private _getStudentDetails(){
    let student = new Student();
    student.id = this.studentForm.controls['id'].value;
    student.firstName = this.studentForm.controls['firstName'].value;
    student.lastName = this.studentForm.controls['lastName'].value;
    student.email = this.studentForm.controls['email'].value;
    student.gender = this.studentForm.controls['gender'].value;
    student.dateOfBirth = this.studentForm.controls['dob'].value;
    student.grade = this.studentForm.controls['grade'].value;
    student.section = this.studentForm.controls['section'].value;
    return student;
  }

  private _setStudentDetailsForm(studentDetails: Student){
    this.studentForm.patchValue({
      id: studentDetails.id,
      firstName: studentDetails.firstName,
      lastName: studentDetails.lastName,
      gender : studentDetails.gender,
      email: studentDetails.email,
      dob: studentDetails.dateOfBirth,
      grade : studentDetails.grade,
      section : studentDetails.section
    })
  }
  
}
