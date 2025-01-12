import { RouterModule, Routes } from '@angular/router';
import { PayPremiumComponent } from './pay-premium/pay-premium.component';

export const routes: Routes = [
    {
        path: "", 
        component: PayPremiumComponent
    },
    {
        path: "pay", 
        component: PayPremiumComponent
    }
];
