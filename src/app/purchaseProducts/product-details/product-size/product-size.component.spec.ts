import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSizeComponent } from './product-size.component';

describe('ProductSizeComponent', () => {
  let component: ProductSizeComponent;
  let fixture: ComponentFixture<ProductSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSizeComponent]
    });
    fixture = TestBed.createComponent(ProductSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
