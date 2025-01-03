import { inject, Injectable } from '@angular/core';
import { ProductClientService } from './product-client.service';
import { map, Observable } from 'rxjs';
import { Product } from '@entities/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductAdapterService {

  private productClient = inject(ProductClientService);

  public getProducts(): Observable<Product[]> {
    return this.productClient.getProducts().pipe(
      map(response => response.products)
    );
  }
  
}
