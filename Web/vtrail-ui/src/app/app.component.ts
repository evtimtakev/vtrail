import { Component } from '@angular/core';
import {CommonHttpService} from "./common/services/common-http.service";
import {CommonMappingService} from "./common/services/common-mapping.service";
import {SocialMediaPost} from "./common/models";
import {Subscription} from "rxjs";
import {LoadingState} from "./common/types";
import {UserInputParserService} from "./common/services/user-input-parser.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vtrail-ui';

  public keywords: string = "";
  public prompts: string = ""
  public timeInterval: any = {
    amount: 1,
    unit: "m"
  }
  public searchResult: SocialMediaPost[] = [];
  public loading: boolean = false;
  public loadingState: LoadingState = "fetchingData";


  private subscriptions: Subscription[] = []

  constructor(private commonHttp: CommonHttpService, private commonMappingService: CommonMappingService, private userInputParserService: UserInputParserService) {}

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  updateKeywords(value: any) {
    this.keywords = value;
  }

  updatePrompts(value: any) {
    this.prompts = value;
  }

  updateTimeInterval(timeInterval: any) {
    this.timeInterval = timeInterval;
  }

  // const body = [{
  //   "id": "redit",
  //   "searchTerms": ["love"],
  //   "filterAmount": "1",
  //   "filterUnit": "m"
  // },
  //   {
  //     "id": "stackoverflow",
  //     "searchTerms": ["javascript"],
  //     "filterAmount": "1",
  //     "filterUnit": "2"
  //   },
  //   {
  //     "id": "twitter",
  //     "searchTerms": ["javascript"],
  //     "hashtagsInput": []
  //   }
  // ]

  search() {
    this.loading = true;
    const { socialMediaSearchQuery, predictionQuery } = this.userInputParserService.parsePrompts(
      this.prompts, this.keywords, this.timeInterval.amount, this.timeInterval.unit);
    this.loadingState = "fetchingData"
    this.subscriptions.push(this.commonHttp.fetchSocialMediaPosts(socialMediaSearchQuery).subscribe(({ socials }: any = {}) => {
      let posts: SocialMediaPost[] = []

      socials?.forEach((item: any) => {
        posts = [...posts, ...this.commonMappingService.mapSocialMediaPostToCommonModel(item.data, item.id)]
      });

      this.loadingState = "predicting"
      this.subscriptions.push(this.commonHttp.makePredictions({...predictionQuery, ...{ content: posts }}).subscribe((result: any) => {
        this.searchResult = result.data;
        this.loading = false
      }))
    }))

  }
}
