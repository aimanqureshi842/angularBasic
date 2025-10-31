import { Component } from "@angular/core";
import { IprogramLang } from "../../modelss/component3Interface";

@Component({
    selector:'app-component3',
    templateUrl:'./component3.component.html',
    styleUrls:['./component3.component.scss']
})
export class Component3{
itemName:string= "Bluetooth Speaker"
id:number= 10;
language:IprogramLang = {
  id: 1,
  name: "JavaScript",
  type: "Frontend & Backend",
  createdBy: "Brendan Eich",
  firstAppeared: 1995
};

programmingLanguages:string[] = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "C#",
  "TypeScript",
  "Ruby",
  "Go"
]
}








