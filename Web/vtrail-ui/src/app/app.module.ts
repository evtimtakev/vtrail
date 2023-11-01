import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { KeywordSearchComponent } from './keyword-search/keyword-search.component';
import { PromptSearchComponent } from './prompt-search/prompt-search.component';
import { SocialMediaResultGridComponent } from './social-media-result-grid/social-media-result-grid.component';
import { LoaderComponent } from './loader/loader.component';
import {CommonHttpService} from "./common/services/common-http.service";
import {CommonMappingService} from "./common/services/common-mapping.service";
import {UserInputParserService} from "./common/services/user-input-parser.service";

@NgModule({
  declarations: [
    AppComponent,
    KeywordSearchComponent,
    PromptSearchComponent,
    SocialMediaResultGridComponent,
    LoaderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    HttpClientModule,
  ],
  providers: [CommonHttpService, CommonMappingService, UserInputParserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
