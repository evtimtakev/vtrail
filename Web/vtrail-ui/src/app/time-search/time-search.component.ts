import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-time-search',
  templateUrl: './time-search.component.html',
  styleUrls: ['./time-search.component.scss']
})
export class TimeSearchComponent {

  public timeAmount: number = 1;
  public timeUnit: string = "m"

  @Output() timeInterval = new EventEmitter<any>();

  onAmountChange(value: number) {
    this.timeAmount = value;
    this.timeInterval.emit({
      amount: this.timeAmount,
      unit: this.timeUnit
    });
  }

  onUnitChange(unit: string) {
    this.timeUnit = unit;
    this.timeInterval.emit({
      amount: this.timeAmount,
      unit: this.timeUnit
    });
  }

}
