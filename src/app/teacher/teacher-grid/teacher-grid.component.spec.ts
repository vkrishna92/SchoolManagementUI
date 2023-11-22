import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherGridComponent } from './teacher-grid.component';

describe('TeacherGridComponent', () => {
  let component: TeacherGridComponent;
  let fixture: ComponentFixture<TeacherGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherGridComponent]
    });
    fixture = TestBed.createComponent(TeacherGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
