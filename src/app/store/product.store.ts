import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Product } from "@entities/interfaces/product.interface";
import { computed, inject } from '@angular/core';
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
  { providedIn: "root"},
  withState(initialState),
  withComputed(({products}) => ({
    productsList: computed(() => products()),
    productsCount: computed(() => products().length),
  })),
  withMethods((store) => ({
    setProducts: (products: Product[]) => patchState(store, { products, state: 'loaded' }),
    setLoading: () => patchState(store, { state: 'loading' }),
    setError: () => patchState(store, { state: 'error' }),
  }))
)
