/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Matter_revisionComponent } from './matter_revision.component';

describe('Matter_revisionComponent', () => {
  let component: Matter_revisionComponent;
  let fixture: ComponentFixture<Matter_revisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Matter_revisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Matter_revisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
