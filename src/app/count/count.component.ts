import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html'
})
export class CountComponent implements OnInit{
  ngOnInit(): void {
  }
  @Input() subtotal: number;

  discount: string = "sss";


  addDiscount(): void {
    if (this.discount === 'aaa' || this.discount === 'bbb' ) {
      this.subtotal = this.subtotal * 0.95;
      alert("Bạn được giảm giá 5%");
    }else{
      alert("Bạn nhập sai mã giảm giá");
    }

  }
}
