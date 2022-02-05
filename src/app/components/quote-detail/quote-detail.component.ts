import { Component, OnInit, Input } from '@angular/core';
import { QuoteInterface } from 'src/app/Interface-s/quote-interface';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quotedescription!: QuoteInterface

  constructor() { }

  ngOnInit(): void {
  }

}
