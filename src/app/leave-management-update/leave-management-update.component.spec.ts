import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveManagementUpdateComponent } from './leave-management-update.component';

describe('LeaveManagementUpdateComponent', () => {
  let component: LeaveManagementUpdateComponent;
  let fixture: ComponentFixture<LeaveManagementUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveManagementUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveManagementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
