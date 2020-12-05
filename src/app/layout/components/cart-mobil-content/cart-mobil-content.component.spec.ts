import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartMobilContentComponent } from './cart-mobil-content.component';

describe('CartMobilContentComponent', () => {
  let component: CartMobilContentComponent;
  let fixture: ComponentFixture<CartMobilContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartMobilContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartMobilContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
