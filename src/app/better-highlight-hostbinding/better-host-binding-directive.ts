import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHostBindingDirective]'
})
export class BetterHighlightHostBindingDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: String = 'transparent';
  constructor(private elref: ElementRef , private render: Renderer2) { }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent';
  }
  ngOnInit() {
  }
}

