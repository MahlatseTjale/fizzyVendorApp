import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ProductModel } from './product.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class VenderService {
  // Service to Component notification
  productsChanged: Subject<ProductModel[]> = new Subject<ProductModel[]>();
  source: Subject<number> = new Subject<number>();

  private products: ProductModel[] = [
    {
      img:  '../../assets/images/coke.png',
      id: 1,
      name: 'Coke',
      price: 10.50,
      units: 10
    },
    {
      img:  '../../assets/images/sprite.png',
      id: 2,
      name: 'Sprite',
      price: 10,
      units: 12
    },
    {
      img:  '../../assets/images/fanta.png',
      id: 3,
      name: 'Fanta',
      price: 11,
      units: 12
    },
    {
      img:  '../../assets/images/pepsi.png',
      id: 4,
      name: 'Pepsi',
      price: 9.5,
      units: 15
    }
  ];

  
  private  amountLoaded: number = 0;


  constructor() { }

  getAllProducts() {
    const productsCopy = [...this.products];
    return productsCopy;
  }

  loadAmount(amount: number){
    this.amountLoaded = (this.amountLoaded + amount);
    this.source.next(this.amountLoaded)
    console.log(this.amountLoaded)
  }

  getAmountLoaded(){
    return this.amountLoaded
  }

  clearAmountLoaded(){
    this.amountLoaded = 0;
    return this.amountLoaded;
  }

 

  deductAmount(productId: number){
    var product = this.products.find(p =>{
      return p.id === productId;
    })

    if(this.amountLoaded >= product.price && product.units > 0){
      this.amountLoaded = (this.amountLoaded - product.price);
      this.source.next(this.amountLoaded)
      product.units = (product.units - 1)

    }else if(this.amountLoaded === 0){
      Swal.fire({
        title: "No Coins Added",
        text: "Please Add Coins",
        timer: 3000,
        showConfirmButton: false
      })
    

    }else if(product.units === 0){
      Swal.fire({
        title: `${product.name} is Unavailable`,
        text: "Coins Returned",
        timer: 3000,
        showConfirmButton: false
      })
      this.amountLoaded = 0;
      this.source.next(this.amountLoaded)


    }else if(this.amountLoaded < product.price){
      Swal.fire({
        title: "Insufficient Balance",
        text: "Please Add Coins",
        timer: 3000,
        showConfirmButton: false
      })
    }

  }

  refresh(){
    Swal.fire({
      title: "Refreshing...",
      timer: 2000,
      showConfirmButton: false
    })
    
    setTimeout(p => {
      
      var product1 = this.products.find(p =>{return p.id === 1})
      product1.units = 10;
  
      var product1 = this.products.find(p =>{return p.id === 2})
      product1.units = 12;
  
      var product1 = this.products.find(p =>{return p.id === 3})
      product1.units = 12;
  
      var product1 = this.products.find(p =>{return p.id === 4})
      product1.units = 15;
  
      this.amountLoaded = 0;
      this.source.next(this.amountLoaded)
    
   }, 2000);
  }



}
