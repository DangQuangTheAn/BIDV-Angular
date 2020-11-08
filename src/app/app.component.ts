import {Component, Input, OnInit} from '@angular/core';
import { ProductService } from './product.service';
import {Product} from './summary.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // products: Product[] = [{
  //   id: '1',
  //   name: 'Product 1',
  //   description: 'Description 1',
  //   image: 'https://via.placeholder.com/240x120',
  //   price: 100000,
  //   quantity: 1
  // }, {
  //   id: '2',
  //   name: 'Product 2',
  //   description: 'Description 2',
  //   image: 'https://via.placeholder.com/240x120',
  //   price: 200000,
  //   quantity: 2
  // }];

  constructor(public productService: ProductService) { }

  numberItems: number;
  subtotal: number;
  products: Product[] = this.productService.products;

  ngOnInit(): void {
    this.update();
  }

  update(): void {
    this.numberItems = 0;
    this.subtotal = 0;
    this.products.forEach(e => {
      this.numberItems += e.quantity;
      this.subtotal += e.price * e.quantity;
    });
  }
}
