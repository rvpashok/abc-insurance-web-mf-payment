import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { PayPremiumComponent } from './pay-premium.component';

export const PAY_PREMIUM_ROUTES: Routes = [
    {
      path: 'pay',
      component: PayPremiumComponent
    }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(PAY_PREMIUM_ROUTES)
  ],
  exports:[RouterModule]
})
export class PayPremiumModule { 

  constructor(){
    console.log("PayPremium Module Class Called");
  }
}
