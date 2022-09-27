import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { MayusValidatorDirective } from '../mayus-validator.directive';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private eventService: EventService, private router: Router, private fb :FormBuilder) { }

  eventForm = this.fb.group({
    name: ['',[Validators.required,Validators.minLength(2)]],
    date:['',Validators.required],
    time:['',Validators.required],
    location: this.fb.group({
      address: ['',Validators.required],
      city: ['',Validators.required],
      country:['' ,[Validators.required,MayusValidatorDirective]]
    },{validators:[MayusValidatorDirective]})
  })
  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/events']);
  }
  submit(){
    console.log(this.eventForm.get('location').get('country').errors.dosMayus)
    this.eventService.saveEvent(this.eventForm.value);
    this.router.navigate(['/events'])  }

  }

