import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmesoTagStatusComponent } from './ameso-tag-status.component';

describe('AmesoTagStatusComponent', () => {
  let component: AmesoTagStatusComponent;
  let fixture: ComponentFixture<AmesoTagStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmesoTagStatusComponent]
    });
    fixture = TestBed.createComponent(AmesoTagStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
