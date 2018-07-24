import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') nuevoColor: string;

  constructor( private el: ElementRef) {
    console.log('Directiva llamada!!!');
   }

  @HostListener('mouseenter') mouseOver () {
    console.log(this.nuevoColor);
    this.asignarColor(this.nuevoColor);
  }

  @HostListener('mouseleave') mouseOut () {
    this.el.nativeElement.style.backgroundColor = null;
  }

  private asignarColor (color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
