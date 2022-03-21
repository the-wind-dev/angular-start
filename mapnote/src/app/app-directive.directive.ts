import { Directive, Input, OnChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class AppDirectiveDirective implements OnChanges {

  @Input() 
  value: object;
  
  constructor(private element: ElementRef<HTMLElement>) {}

  public ngOnChanges() {
    for (let key in this.value) {
      this.element.nativeElement.setAttribute(key, this.value[key]);
    }

  }

}

