import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {PlatformDto} from "../data-sources/platform.dto";
import {PlatformSource} from "../data-sources/platform-source";

@Component({
   selector: 'vt-platform-selector',
   templateUrl: './platform-selector.component.html',
   styleUrls: ['./platform-selector.component.scss']
 })
export class PlatformSelectorComponent implements OnDestroy {
  @Output() onSelectedPlatformChanged: EventEmitter<PlatformDto> = new EventEmitter<PlatformDto>();
  @Output() onPlatformEndpointChanged: EventEmitter<string> = new EventEmitter<string>();

  public selectedPlatform: PlatformDto = new PlatformDto();
  public platformEndpoint: string = "";

  constructor(public platformSource: PlatformSource) {
  }

  public setSelectedPlatform(platform: PlatformDto): void {
    this.selectedPlatform = platform;
    this.onSelectedPlatformChanged.emit(platform);
    this.setPlatformEndpoint(this.selectedPlatform.endpoint);
  }

  public setPlatformEndpoint(endpoint: string): void {
    this.platformEndpoint = endpoint;
    this.onPlatformEndpointChanged.emit(endpoint);
  }

  ngOnDestroy(): void {
    this.onSelectedPlatformChanged.complete();
    this.onPlatformEndpointChanged.complete();
  }
}
