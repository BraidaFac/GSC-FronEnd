import { FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { EventService } from "./event.service";


export function NameDirective(eventService:EventService) : ValidatorFn{

return (control:FormControl) : ValidationErrors | null => {
       const events :any[]= eventService.getEvents();
       let existe:boolean = false;
       events.map((element) => {
       if(element.name===control.value) {existe=true;}
        })
       return existe?  {'nameRepeat':true}:null}



  }

//DEVUELVE TRUE SI EL VALIDADOR ESTA VERIFICANDO QUE NO HAY DOS MAYSUCULAS



