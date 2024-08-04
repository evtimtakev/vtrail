import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisSelectorComponent } from './analysis-selector.component';

describe('AnalysisSelectorComponent', () => {
  let component: AnalysisSelectorComponent;
  let fixture: ComponentFixture<AnalysisSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalysisSelectorComponent]
    });
    fixture = TestBed.createComponent(AnalysisSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
