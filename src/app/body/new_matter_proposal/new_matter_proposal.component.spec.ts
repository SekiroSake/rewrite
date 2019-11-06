/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { New_matter_proposalComponent } from './new_matter_proposal.component';

describe('New_matter_proposalComponent', () => {
  let component: New_matter_proposalComponent;
  let fixture: ComponentFixture<New_matter_proposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ New_matter_proposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(New_matter_proposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
