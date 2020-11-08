import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  header: Headers;

  products: Product[] = [
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

  number = 0;

  constructor() { }

  updateData(){
    for (let i = 0; i < this.products.length; i++){
      this.number += this.products[i].quantity;
    }
    return this.number;
  }
}
