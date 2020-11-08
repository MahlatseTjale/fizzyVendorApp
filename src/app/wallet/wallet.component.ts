import { Component, OnInit } from '@angular/core';

import { VenderService } from './../vender.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  fiveRandCoin: number = 5;
  twoRandCoin: number = 2;
  oneRandCoin: number = 1;
  fiftyCentCoin: number = 0.5;

  constructor(private service: VenderService) { }

  ngOnInit(): void {
  }
  
  onAddFiftyCentCoin(){  
    this.service.loadAmount(this.fiftyCentCoin)
}

  onAddOneRandCoin(){  
    this.service.loadAmount(this.oneRandCoin)
}

  onAddTwoRandCoin(){  
    this.service.loadAmount(this.twoRandCoin)
}

  onAddFiveRandCoin(){  
      this.service.loadAmount(this.fiveRandCoin)
  }
}
