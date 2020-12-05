import { TestBed } from '@angular/core/testing';

import { CartMobilService } from './cart-mobil.service';

describe('CartMobilService', () => {
  let service: CartMobilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartMobilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
