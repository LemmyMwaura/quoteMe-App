import { Directive,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appMostUpvotes]'
})

export class MostUpvotesDirective {
  @Input() isMost: any
 
  constructor() {}

  @HostListener('click') onClicks(){
    this.handleUpvotes()
  }

  handleUpvotes(){
    let array:number[] = []
    this.isMost.quotes.forEach((quote:any) => {
      quote.isMostLiked = false
      array.push(quote.upvoteNo)
    })

    let max = Math.max(...array)
    let i = array.indexOf(max)
    this.isMost.quotes[i].isMostLiked = true;
  }

  ngOnInit(){}
}