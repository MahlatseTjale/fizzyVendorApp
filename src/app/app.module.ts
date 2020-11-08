import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { WalletComponent } from './wallet/wallet.component';
import { AmountLoadedComponent } from './amount-loaded/amount-loaded.component';
import { RefreshAppComponent } from './refresh-app/refresh-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    WalletComponent,
    AmountLoadedComponent,
    RefreshAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
