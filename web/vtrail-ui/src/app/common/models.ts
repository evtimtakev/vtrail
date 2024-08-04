import {socialMediaPostType} from "./types";

export interface SocialMediaPost {
  created: string;
  description: string;
  title: string;
  url: string;
  type: socialMediaPostType
}
