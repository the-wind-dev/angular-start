import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() 
  name: string;

  @Input() 
  number: string;

  @Input() 
  amount: string;

  @Input() 
  expirationDate: string;

  @Input() 
  paymentSystem: string;

  constructor() { }

  ngOnInit(): void {
  }

}