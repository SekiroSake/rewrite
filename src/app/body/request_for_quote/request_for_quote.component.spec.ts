/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Request_for_quoteComponent } from './request_for_quote.component';

describe('Request_for_quoteComponent', () => {
  let component: Request_for_quoteComponent;
  let fixture: ComponentFixture<Request_for_quoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Request_for_quoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Request_for_quoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
