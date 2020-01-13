import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements AfterContentInit {

  @Input('appAutoFocus')
  delay = 0;

  constructor(
    private el: ElementRef
  ) { }

  ngAfterContentInit() {
    setTimeout(() => this.el.nativeElement.focus(), this.delay);
  }
}
