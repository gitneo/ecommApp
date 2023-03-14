import {Component} from "@angular/core";

@Component({
  selector:'home-component',
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
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
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

                <div class="col-md-12 col-lg-6 col-xl-4">
                  <div class="card mb-2 p-3">
                    <img class="card-img-top img-size-32" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" style="width:50%; height: 200px">
                    <div class="card-img-overlay d-flex flex-column align-items-end">
                      <h5 class="card-title text-primary text-black">Kenzo Long Sleeves</h5>
                      <p class="card-text pb-2 pt-1 text-black">$3,500</p>
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

                <div class="col-md-12 col-lg-6 col-xl-4">
                  <div class="card mb-2 p-3">
                    <img class="card-img-top img-size-32" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" style="width:50%; height: 200px">
                    <div class="card-img-overlay d-flex flex-column align-items-end">
                      <h5 class="card-title text-primary text-black">Kenzo Long Sleeves</h5>
                      <p class="card-text pb-2 pt-1 text-black">$3,500</p>
                      <div class="mt-4">
                        <button class="btn btn-primary btn-sm">
                          <i class="fas fa-cart-plus fa-lg mr-2"></i>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-12 col-lg-6 col-xl-4">
                  <div class="card mb-2 p-3">
                    <img class="card-img-top img-size-32" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" style="width:50%; height: 200px">
                    <div class="card-img-overlay d-flex flex-column align-items-end">
                      <h5 class="card-title text-primary text-black">Kenzo Long Sleeves</h5>
                      <p class="card-text pb-2 pt-1 text-black">$3,500</p>
                      <div class="mt-4">
                        <button class="btn btn-primary btn-sm">
                          <i class="fas fa-cart-plus fa-lg mr-2"></i>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </div>
        </div>
      </section>


  `,
  styleUrls:[]
})
export class HomeComponent{}
