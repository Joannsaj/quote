import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('Life is short, live it while you can', 'Joan', new Date(2020, 3, 14)),
    new Quote('Life is what you make it', 'mee', new Date(2020, 3, 14)),
    new Quote(' Its always the small things', 'John', new Date(2020, 3, 14))
  ]
  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete Quote ?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  addUpVote(index) {
    this.quotes[index].upVote++;
  }
  addDownVote(index) {
    this.quotes[index].downVote++;
  }
  highestUpVote() {
    let highestUpVoteQuote = this.quotes[0];
    for (let i = 1; i < this.quotes.length; i++) {
      if (this.quotes[i].upVote > highestUpVoteQuote.upVote) {
        highestUpVoteQuote = this.quotes[i]
      }
    }
    return highestUpVoteQuote
  }
  constructor() { }

  ngOnInit(): void {
  }

}
