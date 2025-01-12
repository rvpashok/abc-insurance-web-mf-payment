import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InsuranceDetails, PolicyType } from '../model/insurance-details';
import { CommonService } from '../services/common.service';
import { DividerModule } from 'primeng/divider';
import { ActivatedRoute } from '@angular/router';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-pay-premium',
  standalone: true,
  imports: [CardModule, ButtonModule, FormsModule, InputTextModule, DividerModule, CommonModule,
    DialogModule
  ],
  templateUrl: './pay-premium.component.html',
  styleUrl: './pay-premium.component.scss'
})
export class PayPremiumComponent implements OnInit {

  policyDetails: { policyTypeName?: string, policyTypeDisplayName?: string } = {};  public insuranceDetails : InsuranceDetails | any;
  taxAmount: Number | any;
  totalPayableAmount: Number | any;
  paymentModelVisible: boolean | any;
  isAuthenticated: boolean | any;
  constructor(private commonService: CommonService, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {

    this.route.queryParamMap.subscribe(params => {
      this.paymentModelVisible = false;
      var profileId = this.commonService.getItem("profileId");
      if(!profileId || profileId === null || profileId == ""){
        this.isAuthenticated = false;
        throw Error("UnAuthorized");
      }
      const type = params.get('type');
      if (profileId) {
        this.isAuthenticated = true;
        profileId = profileId.replace("auth0|", '');
        profileId = profileId.replace(/"/g, "");
      }
      console.log("type: " + type + " uid: " + profileId);
      let policyType: PolicyType = PolicyType[type as keyof typeof PolicyType];
      const dataKey = "insurance_" + policyType.toString().toLowerCase() + "_" + profileId + "_data";
      var insuranceDetailsData = this.commonService.getItem(dataKey);
      if(insuranceDetailsData !== null){
        this.insuranceDetails = JSON.parse(insuranceDetailsData?insuranceDetailsData: "");
        console.log("getDetails: " + this.insuranceDetails);
        this.getPolicyTypeInfo(this.insuranceDetails.policyDetails.type);
        this.taxAmount = ((this.insuranceDetails.policyDetails.premiumAmount)*5)/100;
        this.totalPayableAmount = this.insuranceDetails.policyDetails.premiumAmount + this.taxAmount;
      }
      else {
        console.log("No data found for the key: " + dataKey );
        return;
      }
    });
  }

  getPolicyTypeInfo(type: PolicyType){
    const toRet = this.policyDetails;
    switch (type) {
      case PolicyType.Health | 1:
        toRet.policyTypeDisplayName = "Health Insurance";
        toRet.policyTypeName = "HEALTH";
        return toRet;
      case PolicyType.Auto | 2:
        toRet.policyTypeDisplayName = "Auto Insurance";
        toRet.policyTypeName = "AUTO";
        return toRet;
      case PolicyType.Life | 3:
        toRet.policyTypeDisplayName = "Life Insurance";
        toRet.policyTypeName = "LIFE";
        return toRet;
      case PolicyType.Term | 4:
        toRet.policyTypeDisplayName = "Term Insurance";
        toRet.policyTypeName = "TERM";
        return toRet;
      default:
        return "Unknown Policy Type";
    }
  }

  payPremium(event: Event){
    const el = event.currentTarget as HTMLInputElement;
    console.log("Pay button Clicked")
    this.paymentModelVisible = true;
  }

}
