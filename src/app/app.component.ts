import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PayPremiumComponent } from './pay-premium/pay-premium.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'abc-insurance-web-mf-payment';

  constructor(){
    console.log("APP Component contructor called !!!!");
  }
}
