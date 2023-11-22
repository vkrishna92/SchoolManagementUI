import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBulkUploadComponent } from './student-bulk-upload.component';

describe('StudentBulkUploadComponent', () => {
  let component: StudentBulkUploadComponent;
  let fixture: ComponentFixture<StudentBulkUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentBulkUploadComponent]
    });
    fixture = TestBed.createComponent(StudentBulkUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
