import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  modules: any[] = [
    {
      name: 'Student',
      description: 'Student onboarding, attandance and scores.',
    },
    {
      name: 'Teaching & Staff',
      description: 'Scheduling, examinations and reporting.',
    },
    {
      name: 'Setup',
      description: 'School master data setup.',
    }
    // Add more modules as needed
  ];
  ngOnInit(): void {
    console.log("Home comp")
  }

}
