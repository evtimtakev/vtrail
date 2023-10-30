import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { KeyWordSearchComponent } from './key-word-search/key-word-search.component';
import { PromptSearchComponent } from './prompt-search/prompt-search.component';
import { SocialMediaResultGridComponent } from './social-media-result-grid/social-media-result-grid.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyWordSearchComponent,
    PromptSearchComponent,
    SocialMediaResultGridComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
