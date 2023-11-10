import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {CommonHttpService} from "./common/services/common-http.service";
import {CommonMappingService} from "./common/services/common-mapping.service";
import {SocialMediaPost} from "./common/models";
import {map, ReplaySubject, Subject, takeUntil, tap} from "rxjs";
import {LoadingState} from "./common/types";
import {UserInputParserService} from "./common/services/user-input-parser.service";
import {PlatformSource} from "./data-sources/platform-source";
import {PlatformDto} from "./data-sources/platform.dto";
import {Analysis} from "./data/analysis";
import {PlatformSelectorComponent} from "./platform-selector/platform-selector.component";
import {AnalysisSelectorComponent} from "./analysis-selector/analysis-selector.component";

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
 })
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'vtrail-ui';

  @ViewChild(PlatformSelectorComponent)
  public platformSelectorComponent: PlatformSelectorComponent;
  @ViewChild(AnalysisSelectorComponent)
  public analysisSelectorComponent: AnalysisSelectorComponent;

  public selectedPlatform: PlatformDto = new PlatformDto();

  public platformEndpoint: string = "";

  public selectedAnalysis: Analysis = new Analysis();

  public selectedAnalysisOption: string = "";
  public keywords: string = "";
  public prompts: string = ""
  public timeInterval: any = {
    amount: 1,
    unit: "m"
  }
  public searchResult: SocialMediaPost[] = [];
  public loading: boolean = false;
  public loadingState: LoadingState = "fetchingData";
  private unsubscribeSubject: Subject<void> = new ReplaySubject<void>(1);

  constructor(private commonHttp: CommonHttpService,
              private commonMappingService: CommonMappingService,
              private userInputParserService: UserInputParserService,
              public platformSource: PlatformSource) {
  }

  ngAfterViewInit(): void {
    this.platformSelectorComponent.setSelectedPlatform(this.platformSource.getPlatforms()[0]);
    this.analysisSelectorComponent.setAnalysis(AnalysisSelectorComponent.ANALYSIS[0]);
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }

  updateKeywords(value: any) {
    this.keywords = value;
  }

  updateTimeInterval(timeInterval: any) {
    this.timeInterval = timeInterval;
  }

  // const body = [{
  //   "id": "reddit",
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

  public onPlatformChanged(platform: PlatformDto): void {
    this.selectedPlatform = platform;
  }

  public onEndpointChanged(endpoint: string): void {
    this.platformEndpoint = endpoint;
  }

  public onAnalysisChanged(analysis: Analysis): void {
    this.selectedAnalysis = analysis;
  }

  public onAnalysisOptionChanged(option: string): void {
    this.selectedAnalysisOption = option;
  }

  search() {
    this.prompts =
      this.selectedPlatform.key + "+" + this.selectedAnalysis.value + "+" +
      (this.selectedAnalysisOption == "" ? "neutral" : this.selectedAnalysisOption);

    console.log(this.prompts);

    this.loading = true;
    const {socialMediaSearchQuery, predictionQuery} = this.userInputParserService.parsePrompts(
      [this.selectedPlatform.key],
      this.prompts,
      this.platformEndpoint,
      this.keywords,
      this.timeInterval.amount,
      this.timeInterval.unit);

    this.loadingState = "fetchingData"
    this.commonHttp.fetchSocialMediaPosts(socialMediaSearchQuery)
      .pipe(takeUntil(this.unsubscribeSubject),
            tap({
                  error: (error) => {
                    this.loading = false;
                    console.warn("Failed to retrieve social media posts", error);
                  }
                }),
            map(({socials}: any = {}) => {
              let posts: SocialMediaPost[] = []

              socials?.forEach((item: any) => {
                posts = [...posts, ...this.commonMappingService.mapSocialMediaPostToCommonModel(item.data, item.id)]
              });
              return posts;
            }),
            tap(posts => this.makePredictions(predictionQuery, posts)))
      .subscribe();
  }

  private makePredictions(predictionQuery: Object, posts: SocialMediaPost[]): void {
    this.loadingState = "predicting"

    this.commonHttp.makePredictions({...predictionQuery, ...{content: posts}})
      .pipe(takeUntil(this.unsubscribeSubject),
            tap({
                  next: (result: any) => {
                    this.searchResult = result.data;
                    this.loading = false
                  },
                  error: (error) => {
                    this.loading = false;
                    console.warn("Failed to fetch predictions", error);
                  }
                })
      )
      .subscribe();
  }
}
