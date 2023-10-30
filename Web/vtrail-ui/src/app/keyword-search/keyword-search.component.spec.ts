import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordSearchComponent } from './key-word-search.component';

describe('KeyWordSearchComponent', () => {
  let component: KeywordSearchComponent;
  let fixture: ComponentFixture<KeywordSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeywordSearchComponent]
    });
    fixture = TestBed.createComponent(KeywordSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
