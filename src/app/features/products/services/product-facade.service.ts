import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '@entities/interfaces/product.interface';
import { map, Observable } from 'rxjs';
import { ProductAdapterService } from './product-adapter.service';

@Injectable({
  providedIn: 'root'
})
export class ProductFacadeService {

  private productAdapter = inject(ProductAdapterService);

  public getProducts(): Observable<Product[]> {
    return this.productAdapter.getProducts();
  }

}

