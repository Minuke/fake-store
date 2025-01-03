import { HttpClient } from '@angular/common/http';
import { inject, Injectable, resource, WritableResource } from '@angular/core';
import { Product } from '@entities/interfaces/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductClientService {

  private readonly API_URL = "https://dummyjson.com/products";
  private http: HttpClient = inject(HttpClient);

  public getProducts(): Observable<{products: Product[]}> {
    return this.http.get<{products: Product[]}>(this.API_URL);
  }

  // public productsResource: WritableResource<Product[]> = resource({
  //   loader: async () => {
  //     const response = await fetch(this.API_URL);
  //     if (!response.ok) throw new Error('Failed to fetch products');
  //     return response.json();
  //   },
  // });

  // public getProducts() {
  //   return this.productsResource;
  // }

  
}
