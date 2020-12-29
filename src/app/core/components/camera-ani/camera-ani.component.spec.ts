import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraAniComponent } from './camera-ani.component';

describe('CameraAniComponent', () => {
  let component: CameraAniComponent;
  let fixture: ComponentFixture<CameraAniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameraAniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraAniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
