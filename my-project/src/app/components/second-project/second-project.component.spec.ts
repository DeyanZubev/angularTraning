import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondProjectComponent } from './second-project.component';

describe('SecondProjectComponent', () => {
  let component: SecondProjectComponent;
  let fixture: ComponentFixture<SecondProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondProjectComponent]
    });
    fixture = TestBed.createComponent(SecondProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
