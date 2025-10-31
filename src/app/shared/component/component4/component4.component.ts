import { Component } from "@angular/core";
import { Iproduct } from "../../modelss/component4Interface";

@Component({
    selector: 'app-component4',
    templateUrl: './component4.component.html',
    styleUrls: ['./component4.component.scss']
})
export class Component4 {
    productName: string = "Smart Watch";
    brand: string = "Noise";
    product: Iproduct = {
        name: "iPhone 15",
        brand: "Apple"
    };

    languages: string[] = ["JavaScript", "Python", "Java", "C++", "TypeScript", "Go", "Ruby"];

}




