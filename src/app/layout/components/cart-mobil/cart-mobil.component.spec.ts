import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartMobilComponent } from './cart-mobil.component';

describe('CartMobilComponent', () => {
  let component: CartMobilComponent;
  let fixture: ComponentFixture<CartMobilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartMobilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartMobilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
