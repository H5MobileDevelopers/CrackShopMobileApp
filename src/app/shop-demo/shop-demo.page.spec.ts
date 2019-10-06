import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDemoPage } from './shop-demo.page';

describe('ShopDemoPage', () => {
  let component: ShopDemoPage;
  let fixture: ComponentFixture<ShopDemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDemoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
