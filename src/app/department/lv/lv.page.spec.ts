import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LvPage } from './lv.page';

describe('LvPage', () => {
  let component: LvPage;
  let fixture: ComponentFixture<LvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
