import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';
import { Event } from '../event';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit{

  event!:Event|undefined;
  reviewed :boolean=false;
  constructor(private _eventService :EventServiceService, private _activateRoute :ActivatedRoute,private _router:Router) {

  }
  ngOnInit(): void {
    const id= this._activateRoute.snapshot.paramMap.get('id');
    this.event=this._eventService.getEventById(id);
    }
  regresarEvents(){
    this._router.navigate(['events']);
    //No entendi la parte de que hay dos rutas en la practica...
  }
  onClick(){
    this.reviewed=!this.reviewed;
  }
  }






