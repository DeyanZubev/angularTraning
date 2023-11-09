import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EosMatrixComponent } from './eos-matrix.component';

describe('EosMatrixComponent', () => {
  let component: EosMatrixComponent;
  let fixture: ComponentFixture<EosMatrixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EosMatrixComponent]
    });
    fixture = TestBed.createComponent(EosMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
