import {Component, Input} from '@angular/core';
import {LoadingState} from "../common/types";


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  @Input() state: LoadingState = 'fetchingData'
  @Input() isLoading: boolean = false;

}
