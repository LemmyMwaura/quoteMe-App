import { Component, OnInit } from '@angular/core';
import { QuoteInterface } from 'src/app/Interface-s/quote-interface';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quotes',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  
  constructor() {}

  upIcon = faArrowAltCircleUp;
  downIcon = faArrowAltCircleDown;
  trash = faTrashAlt;

  quotes: QuoteInterface[] = [
    new QuoteInterface(
      'Live as if you were to die tomorrow. Learn as if you were to live forever. ',
      'Mahatma Gandhi',
      'Lemmy'
    ),
    new QuoteInterface(
      'That which does not kill us makes us stronger. ',
      'Friedrich Nietzsche',
      'Brandon'
    ),
    new QuoteInterface(
      ' We must not allow other people’s limited perceptions to define us. ',
      ' Virginia Satir',
      'Kim'
    ),
    new QuoteInterface(
      ' Do what you can, with what you have, where you are. ',
      'Theodore Roosevelt',
      'Susan'
    ),
  ];

  addNewQuote(newitem: QuoteInterface) {
    let copyOfQuote = {...newitem}
    copyOfQuote.date = new Date()
    this.quotes.push(copyOfQuote);
  }

  delete(isComplete: boolean, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].message}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  upvote(index: number) {
    this.quotes[index].upvoteNo++;
  }

  downvote(index: number) {
    this.quotes[index].downvoteNo++;
  }

  totalVotes(index: number) {
    this.quotes[index].totalVotes++;
  }

  ngOnInit(): void {}
}