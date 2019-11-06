/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Get_helpComponent } from './get_help.component';

describe('Get_helpComponent', () => {
  let component: Get_helpComponent;
  let fixture: ComponentFixture<Get_helpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Get_helpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Get_helpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
