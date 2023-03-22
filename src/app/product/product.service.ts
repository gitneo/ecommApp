import {Injectable} from "@angular/core";
import {Product} from "./product.interface";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn:"root"})
export class ProductService{

  constructor(private http: HttpClient) {}

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>("../assets/data/laptops.json");
  }
}
