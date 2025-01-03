import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Product } from "@entities/interfaces/product.interface";
import { computed, inject } from '@angular/core';
import { ProductFacadeService } from '@features/products/services/product-facade.service';
import { ProductAdapterService } from '@features/products/services/product-adapter.service';
import { pipe, switchMap, tap } from 'rxjs';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

interface ProductState {
  products: Product[];
  state: 'loading' | 'loaded' | 'error';
  filter: { query: string; page: number };
}

const initialState: ProductState = {
  products: [],
  state: 'loading',
  filter: { query: '', page: 1 }
}

export const ProductStore = signalStore(
  withState(initialState),
  withComputed(({products}) => ({
    products: computed(() => products()),
    productsCount: computed(() => products().length),
  })),
  withMethods((store, productAdapter = inject(ProductAdapterService)) => ({
    loadPages: rxMethod<number>(
      pipe(
        tap(() => patchState(store, { state: 'loading' })),
        switchMap(() => productAdapter.getProducts().pipe(
          tap((products) => {
            patchState(store, { products, state: 'loaded' })
          })
        )),
      )
    ) 
  }))
)