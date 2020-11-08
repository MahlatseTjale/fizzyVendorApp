import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { VenderService } from './../vender.service';

@Component({
  selector: 'app-amount-loaded',
  templateUrl: './amount-loaded.component.html',
  styleUrls: ['./amount-loaded.component.css']
})
export class AmountLoadedComponent implements OnInit {
  amountL: Number;
  subSource: Subscription;
  constructor(private service: VenderService) { }

  ngOnInit(): void {
    // subscribing to changes in
    this.subSource = this.service.source.subscribe((amount) => {
      this.amountL = amount;
    })
    this.amountL = this.service.getAmountLoaded()
  }

  returnCoins(){
    this.amountL = this.service.clearAmountLoaded();
  }
}
