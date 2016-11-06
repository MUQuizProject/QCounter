/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ByComponent } from './by.component';

describe('ByComponent', () => {
  let component: ByComponent;
  let fixture: ComponentFixture<ByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
