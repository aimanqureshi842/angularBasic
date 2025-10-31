
export interface Iproducts{
  id: number;
  productName: string;
  price: number;
  category: string;
  details: string;
  image: string;
  stock: number;
}
export interface Istudents{
  id: number;
  name: string;
  course: string;
  marks: number;
}

export interface Iemployees{
    
  id: number;
  name: string;
  position: string;
  salary: number;
}
export interface Icourses{
    id: number;
  name: string;
  duration: string;
  fee: number;
}
export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  genre: string;
}
