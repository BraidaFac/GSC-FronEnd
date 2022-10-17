import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hide]'
})
export class HideDirective implements OnInit{
  numberOfClicks=0;
  constructor(private el :ElementRef,private render : Renderer2) {


   }
   ngOnInit() {
  this.render.setStyle(this.el.nativeElement, 'font-size','10px')

  }


  @HostListener('click', ['$event.target'])
  onClick(btn) {
    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
  }
  @HostListener('mouseenter') onmouseover(event: Event){
    this.render.setStyle(this.el.nativeElement, 'visibility', 'hidden') // Oculta
  }

   @HostListener('mouseleave') onmouseleave(event: Event){
    this.render.setStyle(this.el.nativeElement, 'visibility', 'visible') // Hace visible
  }
}
