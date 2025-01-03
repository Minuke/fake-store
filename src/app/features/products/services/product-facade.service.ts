import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '@entities/interfaces/product.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductFacadeService {

  public http: HttpClient = inject(HttpClient);

  private readonly API_URL = "https://dummyjson.com/products";

  public getProducts(): Observable<Product[]> {
    return this.http.get<{products: Product[]}>(this.API_URL).pipe(map(response => response.products));
  }

}

