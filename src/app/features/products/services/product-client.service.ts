import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '@entities/interfaces/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductClientService {

  private readonly API_URL = "https://dummyjson.com/products";
  private http: HttpClient = inject(HttpClient);

  public fetchProducts(): Observable<{products: Product[]}> {
    return this.http.get<{products: Product[]}>(this.API_URL);
  }
  
}
