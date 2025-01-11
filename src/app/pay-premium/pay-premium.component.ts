import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InsuranceDetails } from '../model/insurance-details';
import { CommonService } from '../services/common.service';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-pay-premium',
  standalone: true,
  imports: [CardModule, ButtonModule, FormsModule, InputTextModule, DividerModule, CommonModule],
  templateUrl: './pay-premium.component.html',
  styleUrl: './pay-premium.component.scss'
})
export class PayPremiumComponent implements OnInit {

  policyDetails: object | undefined;
  public insuranceDetails : InsuranceDetails | any;
  taxAmount: Number | any;
  totalPayableAmount: Number | any;
  constructor(private commonService: CommonService) {
    
  }

  ngOnInit(): void {
    var insuranceDetailsData = this.commonService.getItem("insurance_health_U001_data");
    this.insuranceDetails = JSON.parse(insuranceDetailsData?insuranceDetailsData: "");
    console.log("getDetails: " + this.insuranceDetails);
    this.taxAmount = (this.insuranceDetails.policyDetails.premiumAmount)%5 ==0 ? 100 : 10;
    this.totalPayableAmount = this.insuranceDetails.policyDetails.premiumAmount + this.taxAmount;
    }

}
