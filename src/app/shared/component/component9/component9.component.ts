import { Component } from "@angular/core";
import { Imovie } from "../../modelss/component9Interface";

@Component({
    selector: 'app-component9',
    templateUrl: './component9.component.html',
    styleUrls: ['component9.component.scss']
})
export class Component9 {
    carModel: string = "Hyundai Creta";
    price: number = 1300000;
    movie: Imovie = {
        title: "Inception",
        director: "Christopher Nolan"
    };
    softSkills: string[] = ["Communication", "Teamwork", "Problem Solving", "Adaptability", "Leadership", "Creativity", "Time Management"];

}


