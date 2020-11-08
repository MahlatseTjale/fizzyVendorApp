import { Component, OnInit } from '@angular/core';

import { ProductModel } from './../product.model';
import { VenderService } from './../vender.service';

@Component({
  selector: 'app-refresh-app',
  templateUrl: './refresh-app.component.html',
  styleUrls: ['./refresh-app.component.css']
})
export class RefreshAppComponent implements OnInit {

  constructor(private service: VenderService) { }

  ngOnInit(): void {
  }

  onRefreshApp(){
    this.service.refresh();
  }
}
