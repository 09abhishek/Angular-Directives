import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elref: ElementRef , private render: Renderer2) { }

  ngOnInit () {
    this.render.setStyle(this.elref.nativeElement, 'background-color', 'blue');
  }
}

