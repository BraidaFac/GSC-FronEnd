import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {


  constructor(private eventService: EventService, private router: Router){}
  @Input()pattern: string | RegExp;
  event:Event = {'name':'','date':'','time':'','location':{'address':'','city':'','country':''}};

  ngOnInit() {
  }


  cancel() {;
    this.router.navigate(['/events']);

  }
  submit(){
    this.eventService.saveEvent(this.event);
    this.router.navigate(['/events'])  }


    // hasToWarn(field:string):Boolean{
    //   let input=this.eventForm.get(field);
    //   if(!input) return false;
    //   return input.invalid && input.touched;
    // }


    // inputDynamicStyles(field:string): {[klass: string]:any} {
    //   if(this.hasToWarn(field))
    //   return {'border-color':'red'}
    //   else return {}
    // }

  }
  type Event={
    name:string,
    date:string,
    time:string,
    location:{
      address:string,
      city:string,
      country:string
    }
  }

