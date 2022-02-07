import { Component, OnInit } from '@angular/core';
import { QuoteInterface } from 'src/app/Interface-s/quote-interface';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { TimepipePipe } from 'src/app/pipes/timepipe.pipe';

@Component({
  selector: 'app-quotes',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})

export class QuoteComponent implements OnInit {
  upIcon = faArrowAltCircleUp;
  downIcon = faArrowAltCircleDown;

  quotes: QuoteInterface[] = [
    new QuoteInterface(
      ' “Live as if you were to die tomorrow. Learn as if you were to live forever.” ',
      'Mahatma Gandhi',
      'Lemmy'
    ),
    new QuoteInterface(
      ' “That which does not kill us makes us stronger.” ',
      'Friedrich Nietzsche',
      'Brandon'
    ),
    new QuoteInterface(
      ' “We must not allow other people’s limited perceptions to define us.” ',
      ' Virginia Satir',
      'Kim'
    ),
    new QuoteInterface(
      '  “Do what you can, with what you have, where you are.” ',
      'Theodore Roosevelt',
      'Susan'
    ),
  ];

  addNewQuote(newitem:QuoteInterface){
    console.log(newitem)
    this.quotes.push(newitem)
  }
  
  upvote(index:number) {
    this.quotes[index].upvoteNo++
    // this.quotes[index].isMostLiked = true
  }

  downvote(index:number) {
    this.quotes[index].downvoteNo++
  }

  totalVotes(index:number){
    this.quotes[index].totalVotes ++
  }

  constructor() {}

  ngOnInit(): void {}
}
