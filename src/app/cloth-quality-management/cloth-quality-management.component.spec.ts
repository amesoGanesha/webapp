import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothQualityManagementComponent } from './cloth-quality-management.component';

describe('ClothQualityManagementComponent', () => {
  let component: ClothQualityManagementComponent;
  let fixture: ComponentFixture<ClothQualityManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClothQualityManagementComponent]
    });
    fixture = TestBed.createComponent(ClothQualityManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
