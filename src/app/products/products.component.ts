
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductModel } from './../product.model';
import { VenderService } from './../vender.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: ProductModel[] = [];
  subProductsChanged: Subscription;

  constructor(private service: VenderService) {  }

  ngOnInit(): void {
    this.subProductsChanged = this.service.productsChanged.subscribe((products) => {
      this.products = products;
    });

    this.products = this.service.getAllProducts();
  }

  buyProduct(id){
     

    this.service.deductAmount(id);
    console.log(id)
  }
}
