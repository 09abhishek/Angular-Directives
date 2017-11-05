import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';
// Using this way we can set the attribute from outside or we csn even override them
@Directive({
  selector: '[appBindingDirectiveProperties]'
})
export class BindingDirectivePropertiesDirective implements OnInit {
  @Input() defaultColor: String = 'transparent';
  @Input() highlightColor: String = 'pink';
  @HostBinding('style.backgroundColor') backgroundColor: String = 'transparent';
  constructor(private elref: ElementRef , private render: Renderer2) { }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.backgroundColor = 'yellow';
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}

