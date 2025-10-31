import { Component } from "@angular/core";
import { Icourse } from "../../modelss/component8Interface";

@Component({
    selector: 'app-component8',
    templateUrl: './component8.component.html',
    styleUrls: ['./component8.component.scss']
})
export class Component8 {
    courseName: string = "Full Stack Development";
    duration: string = "6 Months";
    course: Icourse = {
        name: "Full Stack Development",
        duration: "6 Months"
    };
    operatingSystems: string[] = ["Windows", "macOS", "Linux", "Ubuntu", "Fedora", "Kali Linux", "Android"];

}