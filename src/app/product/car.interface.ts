import {Product} from "./product.interface";

export interface Car extends Product{
  make:string,
  model:string;
}
