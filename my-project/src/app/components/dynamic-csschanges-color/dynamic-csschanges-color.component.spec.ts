import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCSSChangesColorComponent } from './dynamic-csschanges-color.component';

describe('DynamicCSSChangesColorComponent', () => {
  let component: DynamicCSSChangesColorComponent;
  let fixture: ComponentFixture<DynamicCSSChangesColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicCSSChangesColorComponent]
    });
    fixture = TestBed.createComponent(DynamicCSSChangesColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
