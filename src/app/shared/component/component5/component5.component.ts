import { Component } from "@angular/core";
import { Istudent } from "../../modelss/component5Interface";

@Component({
    selector: 'app-component5',
    templateUrl: './component5.component.html',
    styleUrls: ['./component5.component.scss']
})
export class Component5 {
    studentName: string = "Aiman Khan";
    course: string = "Angular Development";
    student: Istudent = {
        name: "Aiman Khan",
        course: "Angular Development"
    };
    webTech: string[] = ["HTML", "CSS", "Angular", "React", "Vue.js", "Bootstrap", "Tailwind"];

}

