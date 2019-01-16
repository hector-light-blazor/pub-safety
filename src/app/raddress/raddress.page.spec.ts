import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaddressPage } from './raddress.page';

describe('RaddressPage', () => {
  let component: RaddressPage;
  let fixture: ComponentFixture<RaddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaddressPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
