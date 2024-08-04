import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformSelectorComponent } from './platform-selector.component';

describe('PlatformSelectorComponent', () => {
  let component: PlatformSelectorComponent;
  let fixture: ComponentFixture<PlatformSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformSelectorComponent]
    });
    fixture = TestBed.createComponent(PlatformSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
