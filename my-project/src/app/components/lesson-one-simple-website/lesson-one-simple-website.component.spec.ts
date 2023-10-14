import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonOneSimpleWebsiteComponent } from './lesson-one-simple-website.component';

describe('LessonOneSimpleWebsiteComponent', () => {
  let component: LessonOneSimpleWebsiteComponent;
  let fixture: ComponentFixture<LessonOneSimpleWebsiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessonOneSimpleWebsiteComponent]
    });
    fixture = TestBed.createComponent(LessonOneSimpleWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
