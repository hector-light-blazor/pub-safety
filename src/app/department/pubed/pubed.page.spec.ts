import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubedPage } from './pubed.page';

describe('PubedPage', () => {
  let component: PubedPage;
  let fixture: ComponentFixture<PubedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
