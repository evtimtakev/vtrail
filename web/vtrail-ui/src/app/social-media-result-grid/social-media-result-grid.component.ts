import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-social-media-result-grid',
  templateUrl: './social-media-result-grid.component.html',
  styleUrls: ['./social-media-result-grid.component.scss']
})
export class SocialMediaResultGridComponent {
  @Input() gridItems: any[] = [];

  @Input() isLoading: boolean = false;
}
