import { Injectable } from '@angular/core';
import {SocialMediaPost} from "../models";
import { socialMediaPostType } from "../types";


@Injectable({
  providedIn: 'root'
})
export class CommonMappingService {

  constructor() { }

  mapSocialMediaPostToCommonModel(socialMediaPosts: any[], type: socialMediaPostType): SocialMediaPost[] {
    return socialMediaPosts.map((post) => ({
      ...post,
      type: type
    }))
  }
}
