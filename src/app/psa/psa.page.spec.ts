import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsaPage } from './psa.page';

describe('PsaPage', () => {
  let component: PsaPage;
  let fixture: ComponentFixture<PsaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
