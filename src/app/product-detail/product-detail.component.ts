import { Component, OnInit } from '@angular/core';
import {Product} from '../summary.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent{
  products: Product[] = [
    {id: '1',
    name: 'product 1',
    description: 'description 1',
    image: 'https://bkcare.vn/images/201709/goods_img/thay-man-hinh-laptop-lenovo-14-inch-led-gia-re-lay-lien-G275-1505507463194.jpg',
    price: 100,
    quantity: 2},

    {id: '2',
    name: 'product 2',
    description: 'description 2',
    image: 'https://bkcare.vn/images/201709/goods_img/thay-man-hinh-laptop-lenovo-14-inch-led-gia-re-lay-lien-G275-1505507463194.jpg',
    price: 200,
    quantity: 3
    }
];

  removeProduct(productId: string){
    if(confirm("Are you sure to delete product " + productId)) {
      if (+productId !== -1) {
        this.products.splice(+productId, 1);
      }
    }
  }


}
