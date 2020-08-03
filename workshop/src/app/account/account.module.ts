import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    declarations: [
        AccountComponent,
        LoginComponent
    ],
    imports: [
        AccountRoutingModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: []
})
export class AccountModule { }