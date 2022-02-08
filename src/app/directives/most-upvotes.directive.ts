import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMostUpvotes]'
})

export class MostUpvotesDirective {
  @Input() isMost:any
  constructor(private el:ElementRef) { 
  }

  @HostListener('click') onClicks(){
    // this.el.nativeElement.style.backgroundColor = 'rgba(0,0,0,0.4)' 
    console.log(this.isMost)
  }

  ngOnInit(){}
}