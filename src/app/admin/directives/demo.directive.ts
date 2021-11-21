import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {
  
  constructor(private _ele : ElementRef) {
    // this._ele.nativeElement.style.backgroundColor = "blue";
  }
    
    @HostListener('click') demo(){
      this._ele.nativeElement.style.backgroundColor = "blue";
    }

}
