import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectiveMeterEntryComponent } from './defective-meter-entry.component';

describe('DefectiveMeterEntryComponent', () => {
  let component: DefectiveMeterEntryComponent;
  let fixture: ComponentFixture<DefectiveMeterEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefectiveMeterEntryComponent]
    });
    fixture = TestBed.createComponent(DefectiveMeterEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
