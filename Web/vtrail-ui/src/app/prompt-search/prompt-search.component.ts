import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-prompt-search',
  templateUrl: './prompt-search.component.html',
  styleUrls: ['./prompt-search.component.scss']
})
export class PromptSearchComponent {

  public prompt: string = "";
  @Output() prompts = new EventEmitter<string>();

  onChange(value: string) {
    this.prompts.emit(value);
  }

}
