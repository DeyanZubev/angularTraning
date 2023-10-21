import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolHoverAnimationComponent } from './cool-hover-animation.component';

describe('CoolHoverAnimationComponent', () => {
  let component: CoolHoverAnimationComponent;
  let fixture: ComponentFixture<CoolHoverAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoolHoverAnimationComponent]
    });
    fixture = TestBed.createComponent(CoolHoverAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
