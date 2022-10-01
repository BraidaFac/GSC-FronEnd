import { DatePipe } from '@angular/common';
import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appDateValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: DateValidatorDirective, multi: true}]
})
export class DateValidatorDirective {
  pipe = new DatePipe('en-US');
  constructor() { }
  validate(control:FormControl) : ValidationErrors | null {
    const dateString :string= control.value;
    const dateDay = new Date(dateString).getDay()



    if(dateDay===6 ||dateDay===0) {return   {'date':true}}

    return null;

}
}
