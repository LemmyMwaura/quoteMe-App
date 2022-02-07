import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMostUpvotes]'
})

export class MostUpvotesDirective {
  constructor(private el:ElementRef) { 
  }

  FindHighestValue(){
  }

  @HostListener('click') onClicks(){
    console.log(this)
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