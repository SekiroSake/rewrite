/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Revise_addComponent } from './revise_add.component';

describe('Revise_addComponent', () => {
  let component: Revise_addComponent;
  let fixture: ComponentFixture<Revise_addComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Revise_addComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Revise_addComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
