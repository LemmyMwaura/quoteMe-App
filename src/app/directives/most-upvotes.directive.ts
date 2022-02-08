import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appMostUpvotes]'
})

export class MostUpvotesDirective {
  @Input() isMost: any
 
  constructor(private el:ElementRef, ) { 
  }

  @HostListener('click') onClicks(){
    this.editOtherElem()
    if (this.isMost.quote){
      this.el.nativeElement.style.backgroundColor = 'rgba(0,0,0,0.4)';
    } else {
      this.el.nativeElement.style.backgroundColor = 'rgba(255,255,255,0.4)';
    }
  }

  // @HostBinding('class') class = 'lowest'

  editOtherElem(){
    this.el.nativeElement.style.backgroundColor = 'rgba(255,255,255,0.4)'; 
  }

  ngOnInit(){}
}