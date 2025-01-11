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
  constructor(private commonService: CommonService, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {

    this.route.queryParamMap.subscribe(params => {
      const type = params.get('type');
      var profileId = this.commonService.getItem("profileId");
      if (profileId) {
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
        //this.getPolicyTypeInfo(this.insuranceDetails.policyDetails.type);
        this.taxAmount = (this.insuranceDetails.policyDetails.premiumAmount)%5 ==0 ? 100 : 10;
        this.totalPayableAmount = this.insuranceDetails.policyDetails.premiumAmount + this.taxAmount;
      }
      else {
        console.log("No data found for the key: " + dataKey );
        return;
      }
    });
  }
}
