import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddForm1Component } from './product-add-form1.component';

describe('ProductAddForm1Component', () => {
  let component: ProductAddForm1Component;
  let fixture: ComponentFixture<ProductAddForm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAddForm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
