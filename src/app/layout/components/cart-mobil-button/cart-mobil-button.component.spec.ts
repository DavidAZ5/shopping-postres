import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartMobilButtonComponent } from './cart-mobil-button.component';

describe('CartMobilButtonComponent', () => {
  let component: CartMobilButtonComponent;
  let fixture: ComponentFixture<CartMobilButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartMobilButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartMobilButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
