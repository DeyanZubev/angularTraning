import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRowComponent } from './add-edit-row.component';

describe('AddEditRowComponent', () => {
  let component: AddEditRowComponent;
  let fixture: ComponentFixture<AddEditRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditRowComponent]
    });
    fixture = TestBed.createComponent(AddEditRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
