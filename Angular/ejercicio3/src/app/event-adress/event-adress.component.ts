import { Component, Input, OnInit } from '@angular/core';
import { Ubicacion } from '../ubicacion';

@Component({
  selector: 'app-event-adress',
  templateUrl: './event-adress.component.html',
  styleUrls: ['./event-adress.component.css']
})
export class EventAdressComponent implements OnInit {
  @Input() location!: Ubicacion;
  constructor() { }

  ngOnInit(): void {
  }

}
