import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdataviewComponent } from './userdataview.component';

describe('UserdataviewComponent', () => {
  let component: UserdataviewComponent;
  let fixture: ComponentFixture<UserdataviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdataviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdataviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
