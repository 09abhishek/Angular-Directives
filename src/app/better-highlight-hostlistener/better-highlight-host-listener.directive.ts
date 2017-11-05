import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlightHostListener]'
})
export class BetterHighlightHostListenerDirective implements OnInit{
  constructor(private elref: ElementRef , private render: Renderer2) { }

  ngOnInit () {
  }
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.render.setStyle(this.elref.nativeElement, 'background-color', 'Green');
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.render.setStyle(this.elref.nativeElement, 'background-color', 'transparent');
  }
}

