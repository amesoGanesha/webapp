import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnStockManagementComponent } from './yarn-stock-management.component';

describe('YarnStockManagementComponent', () => {
  let component: YarnStockManagementComponent;
  let fixture: ComponentFixture<YarnStockManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YarnStockManagementComponent]
    });
    fixture = TestBed.createComponent(YarnStockManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
