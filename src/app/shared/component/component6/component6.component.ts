import { Component } from "@angular/core";
import { Iemployee } from "../../modelss/component6Interface";

@Component({
    selector: 'app-component6',
    templateUrl: './component6.component.html',
    styleUrls: ['./component6.component.scss']
})
export class Component6 {
    employeeName: string = "Rohit Sharma";
    position: string = "Frontend Developer";
    employee: Iemployee = {
        name: "Rohit Sharma",
        position: "Frontend Developer"
    };
    cloudPlatforms: string[] = ["AWS", "Azure", "Google Cloud", "IBM Cloud", "Heroku", "DigitalOcean", "Netlify"];

}