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
products: Array<string> = ["Laptop","Smartphone","Headphones","Smartwatch","Tablet","Keyboard","Mouse"]
userName:string='iamAiman';
msg:string='<strong>hi aiman aiman</strong>'
userImg:string='https://c.ndtvimg.com/2025-03/v6v8b1p8_rohit-sharma_625x300_10_March_25.jpeg?im=FeatureCrop,algorithm=dnn,width=1200,height=738'
isFormValid:boolean=false;

  constructor() { }

  ngOnInit(): void {
    this.isProductAvailable=Math.random() >.5 ? true:false
    setTimeout(()=>{
      this.isFormValid=true
    },4000)
  }

onkeyup(eve:Event){
//eve is a parameter here nd represents event
// let val=(eve.target as HTMLInputElement).value
// console.log(val) 
// target represents do 
let inputEle=eve.target as HTMLInputElement;
console.log(inputEle.value);
}

}
