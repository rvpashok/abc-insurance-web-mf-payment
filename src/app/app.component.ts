import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClaimsModule } from './claims/claims.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClaimsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web-mf-payment';

  constructor(){
    console.log("APP Component contructor called !!!!");
  }
}
