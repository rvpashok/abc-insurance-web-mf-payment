import { Component } from '@angular/core';

@Component({
  selector: 'app-claims',
  standalone: false,
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.scss'
})
export class ClaimsComponent {
  constructor(){
    console.log("Component called via federation");
  }
}
