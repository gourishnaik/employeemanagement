import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveManagementCreateComponent } from './leave-management-create.component';

describe('LeaveManagementCreateComponent', () => {
  let component: LeaveManagementCreateComponent;
  let fixture: ComponentFixture<LeaveManagementCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveManagementCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveManagementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
