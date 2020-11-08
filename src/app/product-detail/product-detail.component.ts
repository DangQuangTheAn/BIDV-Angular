import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Product} from '../summary.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit{
  // @Input data Parent => Child
  @Input() products: Product[];

  // @Input data Child => Parent
  @Output() update = new EventEmitter();

  removeProduct(id: string): void {
    if (!confirm('Are you sure to remove item?')) {
      return;
    }

    const index: number = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }

    this.updateProduct();
  }

  updateProduct(): void {
    this.update.emit();
  }

  updateProductQuantity(id: string, quantity: string): void {
    const index: number = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products[index].quantity = parseInt(quantity, 10);
    }

    this.updateProduct();
  }

  ngOnInit(): void {
  }

  reload(){
    this.products = [
      {
        id: '1',
        name: 'product 1',
        description: 'description 1',
        image: 'https://bkcare.vn/images/201709/goods_img/thay-man-hinh-laptop-lenovo-14-inch-led-gia-re-lay-lien-G275-1505507463194.jpg',
        price: 100,
        quantity: 2
      },

      {
        id: '2',
        name: 'product 2',
        description: 'description 2',
        image: 'https://bkcare.vn/images/201709/goods_img/thay-man-hinh-laptop-lenovo-14-inch-led-gia-re-lay-lien-G275-1505507463194.jpg',
        price: 200,
        quantity: 3
      }
    ];
    this.updateProduct();
  }

}
