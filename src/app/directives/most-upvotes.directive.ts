import { Directive, ElementRef, HostListener, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMostUpvotes]'
})

export class MostUpvotesDirective {
  @Input() isMost: any
 
  constructor(private el:ElementRef, private renderer: Renderer2 ) { 
  }

  @HostListener('click') onClicks(){
    this.editOtherElem()
  }

  editOtherElem(){
    let array:number[] = []
    this.isMost.quote.forEach((quote:any) => {
      quote.isMostLiked = false
      array.push(quote.upvoteNo)
    })

    let max = Math.max(...array)
    let i = array.indexOf(max)
    this.isMost.quote[i].isMostLiked = true;
  }

  ngOnInit(){}
}