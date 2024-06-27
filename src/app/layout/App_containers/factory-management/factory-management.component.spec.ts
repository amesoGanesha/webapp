import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryManagementComponent } from './factory-management.component';

describe('FactoryManagementComponent', () => {
  let component: FactoryManagementComponent;
  let fixture: ComponentFixture<FactoryManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactoryManagementComponent]
    });
    fixture = TestBed.createComponent(FactoryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
