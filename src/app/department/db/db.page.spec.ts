import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbPage } from './db.page';

describe('DbPage', () => {
  let component: DbPage;
  let fixture: ComponentFixture<DbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
