import {PlatformDto} from "./platform.dto";

export class PlatformSource {

  private platformList: PlatformDto[] = [
    {name: "Twitter", key: "twitter", url: "https://api.twitter.com", endpoint: ""},
    {name: "Reddit", key: "reddit", url: "https://www.reddit.com", endpoint: "vmware"},
    {name: "Stack Overflow", key: "stackoverflow", url: "https://api.stackexchange.com/", endpoint: ""}
  ];

  public getPlatforms(): PlatformDto[] {
    return this.platformList;
  }
}
