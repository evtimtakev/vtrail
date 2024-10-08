import {Injectable} from '@angular/core';

@Injectable({
              providedIn: 'root'
            })
export class UserInputParserService {

  keywordsBreakChar = ","

  promptBreakChar = "+";

  sentimentMap: any = {
    "negative": -1,
    "neutral": 0,
    "positive": 1,
  }

  constructor() {
  }

  parsePrompts(socialMediaIds: string[], rawPrompts: string, endpoint: string, rawKeywords: string, filterAmount: number = 1,
               filterUnit: string = "m") {
    const prompts = rawPrompts.split(this.promptBreakChar)
    const keywords = rawKeywords.split(this.keywordsBreakChar)
    const sentiment = prompts[1] || "s";
    const sentimentSelection = prompts[2] || "neutral";

    const socialMediaSearchQuery = socialMediaIds.map((socialMedia) => {
      return {
        id: socialMedia,
        endpoint: endpoint,
        searchTerms: keywords,
        filterAmount: filterAmount,
        filterUnit: filterUnit
      }
    })

    const predictionQuery = {
      "prm": sentiment,
      "filter": this.sentimentMap[sentimentSelection],
    }

    return {socialMediaSearchQuery, predictionQuery}
  }
}
