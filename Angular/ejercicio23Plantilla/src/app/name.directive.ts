import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { EventService } from './event.service';

@Directive({
  selector: '[nameRepeat]',
  providers: [{provide: NG_VALIDATORS, useExisting: NameDirective, multi: true}]
})
  export class NameDirective{
    constructor(private _eventService:EventService) { }
    validate(control:FormControl) : ValidationErrors | null {
         const events :any[]= this._eventService.getEvents();
         let existe:boolean = false;
         events.map((element) => {
         if(element.name===control.value) {existe=true;}
          })
         return existe?  {'nameRepeat':true}:null

    }

  //DEVUELVE TRUE SI EL VALIDADOR ESTA VERIFICANDO QUE NO HAY DOS MAYSUCULAS



}
