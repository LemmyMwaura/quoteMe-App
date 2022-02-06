import { Component, OnInit } from '@angular/core';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'QuoteMeApp'
  Quote = faQuoteRight

  showQuote:boolean = false
  subscription!:Subscription

  constructor(private uiservice:UiService) {
    this.subscription = this.uiservice.onToggle().subscribe( (value) => {
      this.showQuote = value
    })
  }

  onToggle(){
    this.uiservice.toggleAddQuote()
  }

  ngOnInit(): void {
  }

}
