import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaResultGridComponent } from './social-media-result-grid.component';

describe('SocialMediaResultGridComponent', () => {
  let component: SocialMediaResultGridComponent;
  let fixture: ComponentFixture<SocialMediaResultGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialMediaResultGridComponent]
    });
    fixture = TestBed.createComponent(SocialMediaResultGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
