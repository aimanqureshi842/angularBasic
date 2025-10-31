import { Component } from "@angular/core";
import { Iproducts } from "../../modelss/table";

@Component({
    selector:'app-table',
    templateUrl:'./table.component.html',
    styleUrls:['./table.component.scss']
})
export class TableComponent{
     products:Array<Iproducts> = [
  {
    id: 1,
    productName: "Apple iPhone 15",
    price: 79999,
    category: "Smartphones",
    details: "128GB, A16 Bionic chip, 6.1-inch Super Retina XDR display",
    image: "https://example.com/images/iphone15.jpg",
    stock: 25
  },
  {
    id: 2,
    productName: "Samsung Galaxy S23",
    price: 74999,
    category: "Smartphones",
    details: "256GB, Snapdragon 8 Gen 2, 6.1-inch Dynamic AMOLED 2X",
    image: "https://example.com/images/galaxys23.jpg",
    stock: 18
  },
  {
    id: 3,
    productName: "HP Pavilion Laptop",
    price: 65999,
    category: "Laptops",
    details: "Intel i5 12th Gen, 16GB RAM, 512GB SSD, 15.6-inch display",
    image: "https://example.com/images/hp-pavilion.jpg",
    stock: 12
  },
  {
    id: 4,
    productName: "Sony WH-1000XM5",
    price: 29999,
    category: "Headphones",
    details: "Wireless Noise Cancelling Headphones with 30hr Battery Life",
    image: "https://example.com/images/sony-wh1000xm5.jpg",
    stock: 40
  },
  {
    id: 5,
    productName: "Apple Watch Series 9",
    price: 41999,
    category: "Wearables",
    details: "Always-On Retina display, GPS, 41mm Aluminium Case",
    image: "https://example.com/images/applewatch9.jpg",
    stock: 30
  }
];
 courses = [
  { id: 1, name: "Full Stack Development", duration: "6 Months", fee: 45000 },
  { id: 2, name: "Data Science", duration: "8 Months", fee: 60000 },
  { id: 3, name: "UI/UX Design", duration: "4 Months", fee: 35000 },
  { id: 4, name: "Cyber Security", duration: "6 Months", fee: 50000 },
  { id: 5, name: "Cloud Computing", duration: "9 Months", fee: 70000 }
];
 employees = [
  { id: 101, name: "Rohit Sharma", position: "Frontend Developer", salary: 65000 },
  { id: 102, name: "Sneha Iyer", position: "Backend Developer", salary: 72000 },
  { id: 103, name: "Vikas Gupta", position: "UI/UX Designer", salary: 60000 },
  { id: 104, name: "Aditi Rao", position: "QA Engineer", salary: 55000 },
  { id: 105, name: "Karan Singh", position: "Project Manager", salary: 90000 }
];
students = [
 { id: 1, name: "Aiman Khan", course: "Angular", marks: 92 },
 { id: 2, name: "Rahul Mehta", course: "JavaScript", marks: 88 },
 { id: 3, name: "Priya Sharma", course: "Python", marks: 95 },
 { id: 4, name: "Arjun Patel", course: "React", marks: 85 },
 { id: 5, name: "Neha Verma", course: "Node.js", marks: 90 }
];
 books = [
  { id: 1, title: "Atomic Habits", author: "James Clear", price: 499, genre: "Self-Help" },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho", price: 399, genre: "Fiction" },
  { id: 3, title: "Clean Code", author: "Robert C. Martin", price: 899, genre: "Programming" },
  { id: 4, title: "The Psychology of Money", author: "Morgan Housel", price: 450, genre: "Finance" },
  { id: 5, title: "Deep Work", author: "Cal Newport", price: 550, genre: "Productivity" }
];
}










