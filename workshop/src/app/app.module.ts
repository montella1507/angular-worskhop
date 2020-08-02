import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { } from '@angular/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { PagerComponent } from './components/pager/pager.component';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { PortalComponent } from './components/portal/portal.component';
import { ProductsComponent } from './components/products/products.component';
import { DetailComponent } from './components/detail/detail.component';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    PagerComponent,
    AccountComponent,
    LoginComponent,
    PortalComponent,
    ProductsComponent,
    DetailComponent,
    LoadingComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
