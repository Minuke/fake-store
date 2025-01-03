import { inject, Injectable } from '@angular/core';
import { ProductAdapterService } from './product-adapter.service';

@Injectable({
  providedIn: 'root'
})
export class ProductFacadeService {

  private productAdapter = inject(ProductAdapterService);

  public getProducts(): void {
    this.productAdapter.getProducts();
  }

  public get products$() {
    return this.productAdapter.products$;
  }
}
