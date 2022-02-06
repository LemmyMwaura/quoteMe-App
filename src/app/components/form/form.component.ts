import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuoteInterface } from 'src/app/Interface-s/quote-interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote = new QuoteInterface(" ", " ")

  @Output() onAddQuote: EventEmitter<QuoteInterface> = new EventEmitter()

  constructor() { }

  onSubmit(){
    if(!this.newQuote.message){
      alert('Please add Quote')
    }
    this.onAddQuote.emit(this.newQuote)
  }

  ngOnInit(): void {
  }
}
