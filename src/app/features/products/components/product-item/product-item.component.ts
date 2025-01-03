import { Component, Input } from '@angular/core';
import { Product } from '@entities/interfaces/product.interface';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {

  @Input() product!: Product;
  
}
