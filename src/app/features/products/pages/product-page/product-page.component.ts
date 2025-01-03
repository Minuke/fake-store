import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, inject, runInInjectionContext } from '@angular/core';
import { Product } from '@entities/interfaces/product.interface';
import { ProductListComponent } from '@features/products/components/product-list/product-list.component';
import { ProductFacadeService } from '@features/products/services/product-facade.service';
import { Observable } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-page',
  imports: [ProductListComponent, CommonModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {

  public productFacade = inject(ProductFacadeService);
  private injector = inject(EnvironmentInjector);

  public products$!: Observable<Product[]>;

  public ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
        this.productFacade.getProducts();
        this.products$ = toObservable(this.productFacade.products$);
    });
}

}
