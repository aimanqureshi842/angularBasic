import { Component } from "@angular/core";
import { Ibook } from "../../modelss/component7Interface";


@Component({
    selector:'app-component7',
    templateUrl:'./component7.component.html',
    styleUrls:['./component7.component.scss']
})
export class Component7{
    bookTitle: string = "Atomic Habits";
author: string = "James Clear";
 book: Ibook = {
  title: "Atomic Habits",
  author: "James Clear"
};
    tools: string[] = ["VS Code", "Git", "Postman", "Docker", "Jenkins", "Figma", "Webpack"];


}