import { Component, OnInit, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {
  @Input() text!:string;
  @Input() color!:string;
  @Input() textcolor!:string;
  @Input() icontype!: IconProp;
  @Input() iconcolor!: string;

  Quote = faQuoteRight
  Uparrow = faArrowsAlt

  constructor() { }

  ngOnInit(): void {
  }

}