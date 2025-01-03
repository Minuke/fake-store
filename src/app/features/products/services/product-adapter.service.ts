import { inject, Injectable } from '@angular/core';
import { ProductClientService } from './product-client.service';
import { map, tap } from 'rxjs';
import { ProductStore } from '../../../store/product.store';

@Injectable({
  providedIn: 'root'
})
export class ProductAdapterService {

  private productClient = inject(ProductClientService);
  private productStore = inject(ProductStore);

  public getProducts() {
    this.productStore.setLoading();
    this.productClient.getProducts().pipe(
      map(response => response.products),
      tap(products => this.productStore.setProducts(products))
    ).subscribe({
      error: () => this.productStore.setError()
    });
  }

  public get products$() {
    return this.productStore.products;
  }
}
