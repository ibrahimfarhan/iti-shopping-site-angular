import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './core/header/header.component';
import { ProductsContainerComponent } from './features/product/products-container/products-container.component';
import { FooterComponent } from './core/footer/footer.component';
import { ProductComponent } from './features/product/product/product.component';
import { AddProductComponent } from './features/product/add-product/add-product.component';
import { ProductDetailsComponent } from './features/product/product-details/product-details.component';
import { ShoppingCartComponent } from './features/product/shopping-cart/shopping-cart.component';
import { DropdownMenuComponent } from './shared/dropdown-menu/dropdown-menu.component';
import { ProductInCartComponent } from './features/product/product-in-cart/product-in-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsContainerComponent,
    FooterComponent,
    ProductComponent,
    AddProductComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    DropdownMenuComponent,
    ProductInCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
