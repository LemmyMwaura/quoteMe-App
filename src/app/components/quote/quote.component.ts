import { Component, OnInit } from '@angular/core';
import { QuoteInterface } from 'src/app/Interface-s/quote-interface';

@Component({
  selector: 'app-quotes',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: QuoteInterface[] = [
    {
      message:
        ' “Live as if you were to die tomorrow. Learn as if you were to live forever.” ',
      mostLikes: false,
      author: 'Mahatma Gandhi',
      votes: 0,
    },
    {
      message: ' “That which does not kill us makes us stronger.” ',
      mostLikes: false,
      author: 'Friedrich Nietzsche',
    },
    {
      message:
        ' “We must not allow other people’s limited perceptions to define us.” ',
      mostLikes: false,
      author: ' Virginia Satir',
    },
    {
      message: '  “Do what you can, with what you have, where you are.” ',
      mostLikes: false,
      author: 'Theodore Roosevelt',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
