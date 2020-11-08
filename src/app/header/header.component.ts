import { Component, Input, OnInit } from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{
  numberItems: number = this.productService.updateData();

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    // this.numberItems = this.productService.updateData();
  }
}
