import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailtechLabComponent } from './retailtech-lab.component';

describe('RetailtechLabComponent', () => {
  let component: RetailtechLabComponent;
  let fixture: ComponentFixture<RetailtechLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailtechLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailtechLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
