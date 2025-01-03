import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Product } from '@entities/interfaces/product.interface';
import { ProductListComponent } from '@features/products/components/product-list/product-list.component';
import { ProductFacadeService } from '@features/products/services/product-facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-page',
  imports: [ProductListComponent, CommonModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {

  public productService = inject(ProductFacadeService);

  public products$!: Observable<Product[]>;

  public ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

}
