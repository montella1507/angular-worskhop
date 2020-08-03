import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { } from '@angular/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { UselessComponent } from './components/product-card/useless.component';
import { PagerComponent } from './components/pager/pager.component';
import { PortalComponent } from './components/portal/portal.component';
import { ProductsComponent } from './components/products/products.component';
import { DetailComponent } from './components/detail/detail.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { LiFilterComponent, LiFilterTemplateDirective } from './li-filter/li-filter.component';
import { CartButtonComponent } from './components/detail/cart-button/cart-button.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    UselessComponent,
    PagerComponent,
    PortalComponent,
    ProductsComponent,
    DetailComponent,
    LoadingComponent,
    ColorPickerComponent,
    LiFilterComponent,
    LiFilterTemplateDirective,
    CartButtonComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
