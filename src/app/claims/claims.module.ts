import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimsComponent } from './claims.component';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';

export const CLAIMS_ROUTES: Routes = [
    {
      path: 'claim',
      component: ClaimsComponent
    }
];

@NgModule({
  declarations: [ClaimsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CLAIMS_ROUTES)
  ],
  exports:[ClaimsComponent,RouterModule]
})
export class ClaimsModule { 

  constructor(){
    console.log("Claim Module Class Called");
  }
}
