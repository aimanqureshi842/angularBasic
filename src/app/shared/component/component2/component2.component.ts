import { Component, OnInit } from "@angular/core";
import { Imobile } from "../../modelss/component2Interface";


@Component({
    selector: 'app-component2',
    templateUrl: './component2.component.html',
    styleUrls: ['./component2.component.scss']
})
export class Component2 implements OnInit {
    mobileName: string = 'iphone16';
    mobileId: string = 'ghsuei-jdn';
    mobile:Imobile = {
        productName: "Apple iPhone 15",
        brand: "Apple",
        price: 79999,
        details: "128GB, A16 Bionic chip, 6.1-inch Super Retina XDR display"
    }

    mobilesArr: Array<string> = [
        "Apple iPhone 15",
        "Samsung Galaxy S23",
        "OnePlus 11R",
        "Google Pixel 8",
        "Xiaomi 13 Pro",
        "Realme 12 Pro+"]
    constructor() { }
    ngOnInit(): void {

    }
}













