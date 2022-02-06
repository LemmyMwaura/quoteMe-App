import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMostUpvotes]'
})
export class MostUpvotesDirective {
  constructor(private el:ElementRef,) { 
    // el.nativeElement.style.backgroundColor = 'red'
  }

  highestUpvoteChecker(){

  }

  ngOnInit(){
    
  }
}