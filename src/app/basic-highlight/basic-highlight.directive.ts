import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements  OnInit {

    constructor(private Ref: ElementRef) {}
    ngOnInit() {
        this.Ref.nativeElement.style.background = 'Red';
    }
}