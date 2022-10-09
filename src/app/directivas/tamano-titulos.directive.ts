import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTamanoTitulos]'
})
export class TamanoTitulosDirective implements OnInit{

  constructor(private elemento: ElementRef,
    private renderer: Renderer2) { }

ngOnInit(): void {
    this.renderer.setStyle(this.elemento.nativeElement, 'font-size', '20px');
}

}
