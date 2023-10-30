import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyWordSearchComponent } from './key-word-search.component';

describe('KeyWordSearchComponent', () => {
  let component: KeyWordSearchComponent;
  let fixture: ComponentFixture<KeyWordSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyWordSearchComponent]
    });
    fixture = TestBed.createComponent(KeyWordSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
