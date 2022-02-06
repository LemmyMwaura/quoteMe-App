import { Component, OnInit } from '@angular/core';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'QuoteMeApp'
  Quote = faQuoteRight

  constructor() { }

  ngOnInit(): void {
  }

}
