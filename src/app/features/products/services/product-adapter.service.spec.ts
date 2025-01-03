import { TestBed } from '@angular/core/testing';

import { ProductAdapterService } from './product-adapter.service';

describe('ProductAdapterService', () => {
  let service: ProductAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
