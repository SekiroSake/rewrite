/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MatterComponent } from './matter.component';

describe('MatterComponent', () => {
  let component: MatterComponent;
  let fixture: ComponentFixture<MatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
