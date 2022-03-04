import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveManagementViewComponent } from './leave-management-view.component';

describe('LeaveManagementViewComponent', () => {
  let component: LeaveManagementViewComponent;
  let fixture: ComponentFixture<LeaveManagementViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveManagementViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveManagementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
