import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuoteInterface } from 'src/app/Interface-s/quote-interface';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote = new QuoteInterface("", "", "")

  @Output() onAddQuote: EventEmitter<QuoteInterface> = new EventEmitter()
  
  showQuote:boolean = false
  subscription!:Subscription

  constructor(private uiservice:UiService) {
    this.subscription = this.uiservice.onToggle().subscribe( (value) => {
      this.showQuote = value
    })
  }

  onSubmit(quoteForm: NgForm){
    this.onAddQuote.emit(this.newQuote)
    quoteForm.reset()
  }

  ngOnInit(): void {
  }
}