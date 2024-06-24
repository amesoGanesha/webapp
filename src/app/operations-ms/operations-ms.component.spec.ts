import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsMSComponent } from './operations-ms.component';

describe('OperationsMSComponent', () => {
  let component: OperationsMSComponent;
  let fixture: ComponentFixture<OperationsMSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperationsMSComponent]
    });
    fixture = TestBed.createComponent(OperationsMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
