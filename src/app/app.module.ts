import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { QuoteComponent } from './components/quote/quote.component';
import { FormComponent } from './components/form/form.component';
import { QuoteDetailComponent } from './components/quote-detail/quote-detail.component';

import { MostUpvotesDirective } from './directives/most-upvotes.directive';
import { TimepipePipe } from './pipes/timepipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    QuoteComponent,
    FormComponent,
    QuoteDetailComponent,
    MostUpvotesDirective,
    TimepipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
