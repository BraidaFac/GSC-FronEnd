import { Component, OnInit } from '@angular/core';
import { ChuckNorrisApiService } from '../chuck-norris-api.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: any;

  constructor(private eventService: EventService,
    private _serviceChuck : ChuckNorrisApiService) { }
    mensaje!:string;
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
  getMessage():void{
    this._serviceChuck.getMessage().subscribe(data=>{
      this.mensaje =data;
    });
  }


}
