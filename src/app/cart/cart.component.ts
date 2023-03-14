import {Component} from "@angular/core";

@Component({
  selector:'cart-component',
  template:`

    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Your Cart</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Cart</a></li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->



    <section class="content">
      <!-- Default box -->
      <div class="container">

      <div class="card card-success">
        <div class="card-body">
          <div class="row">

              <div class="col-12 col-sm-6">
                <!-- <cart-product-listing [cartItems]="cartItems"></cart-product-listing> -->
                <div class="col-md-12 col-sm-6 col-12">


                  <!-- <cart-item [cartItem]="cartItem"></cart-item> -->
                  <div class="info-box">
                    <div class="card mb-2 attachment-block clearfix">
                      <img class="card-img-top attachment-img" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="Dist Photo 1">
                    </div>

                    <div class="info-box-content attachment-pushed ">
                      <span class="info-box-text attachment-heading ml-2">Kenzo long sleeves</span>
                      <span class=" attachment-text ml-2"><label class="form-check-label">Price:</label>$3800</span>
                      <span>
                          <div class="btn-group float-left">
                            <label class="form-check-label ml-2">Quantity:</label>
                            <input type="number" class="form-control ml-2" placeholder="1" style="width:60px; height: 30px">
                          </div>
                          <div class="btn-group float-right">
                            <button type="button" class="btn btn-default">
                              <i class="fas fa-align-left"></i>
                            </button>
                          </div>
                        </span>
                    </div>
                  </div>



                  <div class="info-box">
                    <div class="card mb-2 attachment-block clearfix">
                      <img class="card-img-top attachment-img" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="Dist Photo 1">
                    </div>

                    <div class="info-box-content attachment-pushed ">
                      <span class="info-box-text attachment-heading ml-2">Kenzo long sleeves</span>
                      <span class=" attachment-text ml-2"><label class="form-check-label">Price:</label>$3800</span>
                      <span>
                          <div class="btn-group float-left">
                            <label class="form-check-label ml-2">Quantity:</label>
                            <input type="number" class="form-control ml-2" placeholder="1" style="width:60px; height: 30px">
                          </div>
                          <div class="btn-group float-right">
                            <button type="button" class="btn btn-default">
                              <i class="fas fa-align-left"></i>
                            </button>
                          </div>
                        </span>
                    </div>
                  </div>




                </div>
              </div>

              <div class="col-12 col-sm-4">
                <h3 class="my-3">Order Summary</h3>
                <hr>

                <!-- <cart_summary></cart_summary> -->
                <div class="card-body">
                  <dl class="row">

                    <dt class="col-sm-4">Subtotal</dt>
                    <dd class="col-sm-8">3800</dd>
                    <hr>

                    <dt class="col-sm-4">Shipping</dt>
                    <dd class="col-sm-8">0.00</dd>
                    <hr>

                    <dt class="col-sm-4">Tax</dt>
                    <dd class="col-sm-8">0.00</dd>
                    <hr>

                    <dt class="col-sm-4">Total</dt>
                    <dd class="col-sm-8">0.00</dd>
                    <hr>

                  </dl>
                </div>

                <div class="bg-gray py-2 px-3 mt-4">
                  <h2 class="mb-0">
                   3800
                  </h2>
                </div>


                <div class="mt-4">
                  <button class="btn btn-primary btn-lg btn-flat">
                    PURCHASE
                  </button>
                </div>
              </div>

          </div>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
      </div>
    </section>
    <!-- /.content -->
  `,
  styleUrls:[]
})
export class CartComponent{}
