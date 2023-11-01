import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-keyword-search',
  templateUrl: './keyword-search.component.html',
  styleUrls: ['./keyword-search.component.sass']
})
export class KeywordSearchComponent {

  public input: string = "";
  @Output() keywords = new EventEmitter<string>();

  constructor() {
  }

  onChange(value: string) {
    this.keywords.emit(value);
  }

}
