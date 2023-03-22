import {Component, OnInit} from "@angular/core";
import {Product} from "./product.interface";
import {ProductService} from "./product.service";
import {Observable} from "rxjs";

@Component({
  selector:'product-component',
  template:`
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0"> Our Product Listing</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Product</a></li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- <home-product-list [products]="products"></home-product-list> -->
    <section class="content">
      <div class="container">
        <div class="card card-success">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12 col-lg-6 col-xl-4" *ngFor="let product of products">
                <div class="card mb-2 p-3">
                  <img class="card-img-top img-size-32" src="{{product.thumbnail}}" alt="" style="width:50%; height: 200px">
                  <div class="card-img-overlay d-flex flex-column align-items-end">
                    <h5 class="card-title text-primary text-black">{{product.title}}</h5>
                    <p class="card-text pb-2 pt-1 text-black">{{product.price}}</p>
                    <div class="mt-4">
                      <button class="btn btn-primary btn-sm">
                        <i class="fas fa-cart-plus fa-lg mr-2"></i>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <home-product [product]="product" ></home-product> -->
            </div>
          </div>
        </div>
      </div>
    </section>


  `,
  styleUrls:[]
})
export class ProductComponent implements OnInit{

  products : Product[];

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
      this.productService.getProducts().subscribe(p => this.products = p);
  }


}
