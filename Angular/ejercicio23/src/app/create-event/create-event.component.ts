import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { ValidacionesPropias } from '../mayus-validator.directive';
import {NameDirective} from '../name.directive';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private eventService: EventService, private router: Router, private fb :FormBuilder) { }

  eventForm = this.fb.group({
    name: ['',[Validators.required,Validators.minLength(2),NameDirective(this.eventService)]],
    date:['',Validators.required],
    time:['',Validators.required],
    location: this.fb.group({
      address: ['',Validators.required],
      city: ['',Validators.required],
      country:['' ,[Validators.required,ValidacionesPropias.MayusValidator]]
    },{validators:[ValidacionesPropias.MayusValidator ,NameDirective]})
  })
  ngOnInit() {
  }

  cancel() {;
    this.router.navigate(['/events']);

  }
  submit(){
    this.eventService.saveEvent(this.eventForm.value);
    this.router.navigate(['/events'])  }


    hasToWarn(field:string):Boolean{
      let input=this.eventForm.get(field);
      if(!input) return false;
      return input.invalid && input.touched;
    }


    inputDynamicStyles(field:string): {[klass: string]:any} {
      if(this.hasToWarn(field))
      return {'border-color':'red'}
      else return {}
    }

  }

