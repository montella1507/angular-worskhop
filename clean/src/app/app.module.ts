import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LiFilterComponent } from './components/li-filter/li-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    LiFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
