import { Component, OnInit } from "@angular/core";
import { Iproduct } from "../../modelss/component1Interface";


@Component({
    selector: 'app-component1',
    templateUrl: './component1.component.html',
    styleUrls: ['./component1.component.scss']
})
export class Component1 implements OnInit {
    // export it to declare or import in appmodules declaration array
    productName: string = 'samsung Galaxy';
    productId: string = '123';
    productInfo:Iproduct={
    id: 1,
    productName: "Laptop",
    price: 65000,
    details: "15.6-inch display, Intel i5 processor, 8GB RAM, 512GB SSD"

    }
    products: Array<string> = ["Laptop","Smartphone","Headphones","Smartwatch","Tablet","Keyboard","Mouse"]
    constructor() { }
    ngOnInit(): void {

    }
}















