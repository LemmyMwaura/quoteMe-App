import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { QuoteComponent } from 'src/app/components/quote/quote.component';

@Directive({
  selector: '[appMostUpvotes]'
})

export class MostUpvotesDirective {
  constructor(private el:ElementRef) { 
  }

  @HostListener('click') onClicks(){
    this.highestUpvoteChecker('yellow')
  }

  @HostListener('dblclick') onDoubleClicks(){
    this.highestUpvoteChecker('rgba(255,255,255,0.4)')
  }

  highestUpvoteChecker(color:string){
    this.el.nativeElement.style.backgroundColor = color
  }

  ngOnInit(){}
}