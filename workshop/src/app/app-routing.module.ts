import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './components/portal/portal.component';

import { ProductsComponent } from './components/products/products.component';
import { DetailComponent } from './components/detail/detail.component';

import { UserLoggedInGuard } from './guards/user-logged-in.guard';
import { UserNotLoggedInGuard } from './guards/user-not-logged-in.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [
      UserLoggedInGuard
    ],
    component: PortalComponent,
    children: [
      {
        path: 'catalog/:category/:subcategory/:product',
        component: DetailComponent
      },
      {
        path: 'catalog/:category/:subcategory',
        component: ProductsComponent
      },
      {
        path: '',
        redirectTo: 'catalog/men/sweaters',
        pathMatch: 'full'

      }
    ]
  },
  {
    path: 'account',
    canActivate: [
      UserNotLoggedInGuard
    ],
    loadChildren: () => import('./account/account.module').then(x => x.AccountModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
