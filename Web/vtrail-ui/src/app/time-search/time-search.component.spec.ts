import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSearchComponent } from './time-search.component';

describe('PromptSearchComponent', () => {
  let component: TimeSearchComponent;
  let fixture: ComponentFixture<TimeSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeSearchComponent]
    });
    fixture = TestBed.createComponent(TimeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
