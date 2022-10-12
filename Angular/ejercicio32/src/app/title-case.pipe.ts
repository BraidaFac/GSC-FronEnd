import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    const palabras = value.split(' ');
   return palabras.map((palabra) => {
      return palabra[0].toUpperCase() + palabra.substring(1);
  }).join(" ");

  }

}
