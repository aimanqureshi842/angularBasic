import { Component, OnInit } from '@angular/core';
import { IcardInfo } from '../../modelss/cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

cards: IcardInfo[] = [
  {
    title: "iPhone 15",
    description: "Apple’s latest smartphone with an A16 Bionic chip and advanced dual-camera system.",
    image:"https://cdn.mos.cms.futurecdn.net/yDn3ZSXu9eSBxmXQDZ4PCF-1200-80.jpg"
  },
  {
    title: "Angular Course",
    description: "Master Angular framework in 6 months and build modern single-page applications.",
    image: "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png"
  },
  {
    title: "Rohit Sharma",
    description: "Frontend Developer specializing in Angular and TypeScript.",
    image: "https://c.ndtvimg.com/2025-03/v6v8b1p8_rohit-sharma_625x300_10_March_25.jpeg?im=FeatureCrop,algorithm=dnn,width=1200,height=738"
  },
  {
    title: "Atomic Habits",
    description: "A bestselling self-help book by James Clear focused on habit improvement.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQKbgv59V3PXYx0oodVD9T8oGZ-ePWgDhnaA&s"
  },
  {
    title: "Full Stack Development",
    description: "Comprehensive program covering frontend, backend, and database technologies.",
    image: "https://images.yourstory.com/cs/1/6b460cd040d711e994bbefffe3577d8b/full-stack-web-development-1586433444650.png?fm=png&auto=format&w=800&blur=500"
  },
  {
    title: "Inception",
    description: "A sci-fi thriller directed by Christopher Nolan, exploring dreams and reality.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2NE9bhAXoNnf9M5yvDP-QLr702m3S8DJxPA&s"
  },
  {
    title: "Mumbai City",
    description: "The financial capital of India, known for Bollywood, beaches, and nightlife.",
    image: "https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg"
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
