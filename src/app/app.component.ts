import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductPageComponent } from '@features/products/pages/product-page/product-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fake-store';
}
