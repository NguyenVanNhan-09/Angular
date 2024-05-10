import { Component, Input } from '@angular/core';
import { TProduct } from '../../../interface/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  @Input() product: TProduct = {} as TProduct;

  onClick() {
    alert('One click');
  }
}
