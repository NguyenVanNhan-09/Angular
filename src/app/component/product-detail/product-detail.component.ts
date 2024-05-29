import { Component, Input, inject } from '@angular/core';
import { TProduct } from '../../../interface/product';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  // @Input() product: TProduct = {} as TProduct;
  // onClick() {
  //   alert('One click');
  // }
  product: TProduct = {} as TProduct;
  route = inject(ActivatedRoute);
  async ngOnInit() {
    const id = this.route.snapshot.params['id'];
    const { data } = await axios.get(`https://dummyjson.com/product/${id}`);
    this.product = data;
  }
}
