import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptSearchComponent } from './prompt-search.component';

describe('PromptSearchComponent', () => {
  let component: PromptSearchComponent;
  let fixture: ComponentFixture<PromptSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromptSearchComponent]
    });
    fixture = TestBed.createComponent(PromptSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
