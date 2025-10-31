import { Component } from "@angular/core";
import { Icity } from "../../modelss/component10Interface";


@Component({
  selector: 'app-component10',
  templateUrl: 'component10.component.html',
  styleUrls: ['component10.component.scss']
})
export class Component10 {
  movieTitle: string = "Inception";
  director: string = "Christopher Nolan";
  city: Icity = {
    name: "Mumbai",
    state: "Maharashtra"
  };
  frontendFrameworks: string[] = [
    "Angular",
    "React",
    "Vue.js",
    "Svelte",
    "Next.js",
    "Nuxt.js",
    "Ember.js"
  ];

}