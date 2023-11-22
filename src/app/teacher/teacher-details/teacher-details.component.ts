import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { TeacherService } from '../services/teacher.service';
import { Teacher } from '../models/Teacher';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {
  breadCrumb:string[] = ['Home','Setup','Teacher Details'];
  teacherForm: FormGroup;
  /**
   *
   */
  constructor(private fb: FormBuilder, private route:ActivatedRoute, private router: Router, private notification: NzNotificationService, private teacherService: TeacherService) {    
    this.teacherForm = this.fb.group({
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
    let teacherId:number =   Number(this.route.snapshot.paramMap.get('id'));
    if(teacherId > 0){
      //set student form
      this.teacherService.get(teacherId).subscribe(x=>{
        this._setStudentDetailsForm(x);
      })
    }
  }

  clickSave(){    
    console.log(this.teacherForm.value);
    let teacherDetails = this._getStudentDetails();
    console.log(teacherDetails);
    if (teacherDetails.id == 0){
      this.teacherService.insert(teacherDetails).subscribe(x=>{
        this.notification.success('Student details saved.','',{nzDuration:3000});
        this.router.navigate(['/teacher']);
      })
    }
    else if(teacherDetails.id > 0 ){
      this.teacherService.update(teacherDetails).subscribe( x=>{
        this.notification.success('Student details saved.',teacherDetails.firstName,{nzDuration:3000});
      },err=>{
        this.notification.success('Student details save failed.','',{nzDuration:3000});
      })
    }
  }
  private _getStudentDetails(){
    let teacher = new Teacher();
    teacher.id = this.teacherForm.controls['id'].value;
    teacher.firstName = this.teacherForm.controls['firstName'].value;
    teacher.lastName = this.teacherForm.controls['lastName'].value;
    teacher.email = this.teacherForm.controls['email'].value;
    teacher.gender = this.teacherForm.controls['gender'].value;
    teacher.dateOfBirth = this.teacherForm.controls['dob'].value;    
    return teacher;
  }

  private _setStudentDetailsForm(teacherDetails: Teacher){
    this.teacherForm.patchValue({
      id: teacherDetails.id,
      firstName: teacherDetails.firstName,
      lastName: teacherDetails.lastName,
      gender : teacherDetails.gender,
      email: teacherDetails.email,
      dob: teacherDetails.dateOfBirth      
    })
  }
}
