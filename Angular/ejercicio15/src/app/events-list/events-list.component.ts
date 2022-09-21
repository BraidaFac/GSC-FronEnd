import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';
import { Event } from '../event';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
   events!:Event[];


   getHeroes(): void {
    this.events = this._eventService.getEvents();
  }

  constructor(private _eventService:EventServiceService) { }

  ngOnInit() {
    this.events=this._eventService.events;

  }

}
