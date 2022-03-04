import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElistComponent } from './elist.component';

describe('ElistComponent', () => {
  let component: ElistComponent;
  let fixture: ComponentFixture<ElistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
