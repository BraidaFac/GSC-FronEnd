import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() quantity;
  squaredQuantity: number;

  constructor() { }


  ngOnChanges(changes:SimpleChanges): void {

    this.squaredQuantity = Math.pow(+changes.quantity.currentValue,2);

  }

  ngOnInit() {
  }

}
