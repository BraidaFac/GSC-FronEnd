import { FormControl, ValidationErrors } from '@angular/forms'


export function MayusValidatorDirective(control : FormControl):ValidationErrors | null {
  const country : string =control.value;
  let count : number =0;
  for (const letter of country) {
    if(letter.includes('A'||'B'||'C'||'D'||'E'||'F'||'G'||'H'||'Y'||'J'||'K'||'L'||'M'||'N'||'Ñ'||'O'||'P'||'Q'||'R'||'S'||'T'||'U'||'V'||'W'||'X'||'Y'||'Z')){
      count++;
    }
    if(count>1){
      return null}
    }

  return {'dosMayus':true};
}
//DEVUELVE TRUE SI EL VALIDADOR ESTA VERIFICANDO QUE NO HAY DOS MAYSUCULAS


