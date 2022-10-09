import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBooleanColor]'
})
export class BooleanColorDirective implements OnInit{

  @Input('appBooleanColor') top10!: boolean;
  
  constructor(    
    private elemento: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elemento.nativeElement, 'font-weight', 'bold');
    // this.renderer.setStyle(this.elemento.nativeElement, 'text-align', 'center');
    this.renderer.setStyle(
      this.elemento.nativeElement, 
      'color', 
      this.top10 ? '#4CAF50' : '#F44336'
    );
  }
}
