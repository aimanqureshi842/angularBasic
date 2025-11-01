import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
productName:string='samsung Galaxy';
productId:string='234'
isProductAvailable!:boolean;
userName:string='iamAiman';
msg:string='<strong>hi aiman aiman</strong>'

  constructor() { }

  ngOnInit(): void {
    this.isProductAvailable=Math.random() >.5 ? true:false
  }

}
