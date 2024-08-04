import {SubredditSearch} from "./reddit/subreddit-search";
import * as dotenv from "dotenv";
import {isBetweenNowAndStartDate, substractPeriod} from "./common/utils/date-time";
import {StackoverflowSearch} from "./stackoverflow/stackoverflow-search";
import moment from "moment";
import {NO_DATA} from "./common/utils/print-repoty";
import {TwitterSearch} from "./twiter/twiter-search";
import * as cluster from "cluster";
dotenv.config()

type socialMediaType = "reddit" | "stackoverflow" | "twitter";

interface socialMediaFilter {
    searchTerms?: string[];
    filterAmount?: string;
    filterUnit?: string;
    hashtagsInput?: string[];
    id?: socialMediaType,
    endpoint: string
}

const crawlInReddit = async (subreddit: string, searchTerms?: string[], filterAmount?: string, filterUnit?: string): Promise<any> => {
    const redditTerms = searchTerms
    let redditResult = []

    for (let i = 0; i <= redditTerms.length -1; i++) {
        const { data } = await SubredditSearch.searchInSubreddit(subreddit, redditTerms[i]) || {};

        if(data && data.children) {
            const children = data.children.filter((entry) => {
                const { data } = entry;
                const startDate = substractPeriod(Number(filterAmount) || 1,filterUnit || "W");
                if(isBetweenNowAndStartDate(moment.unix(data.created_utc), startDate)) {
                    return entry;
                }
            });

            redditResult = [...redditResult, ...children]
        }

    }

    const mappedRedditPosts = SubredditSearch.toReportModel(redditResult);
    return mappedRedditPosts && mappedRedditPosts.length > 0 ? mappedRedditPosts : [NO_DATA];
}

const crawlInStackoverflow = async (searchTermsInput?: string[], filterAmount?: string, filterUnit?: string): Promise<any> => {
    const fromDate = substractPeriod(Number(filterAmount || 1), filterUnit || "W");
    let result = [];
    const searchTerms = searchTermsInput;

    for (let i = 0; i<= searchTerms.length -1; i++) {
        const {items} = await StackoverflowSearch.searchPosts(searchTerms[i], fromDate.unix());
        result = [...result, ...items]
    }

    const mappedStackoverflowPosts = StackoverflowSearch.toReportModel(result)
    return mappedStackoverflowPosts && mappedStackoverflowPosts.length > 0 ? mappedStackoverflowPosts : [NO_DATA];
}


const crawlInTwitter = async (hashtagsInput?: string[], searchTermsInput?: string[] ): Promise<any> => {
    const hashtags = hashtagsInput;
    const searchTerms = searchTermsInput;
    let result = [];

    if(searchTerms) {
        for (let i = 0; i<= searchTerms.length -1; i++) {
            const searchText = searchTerms[i];
            let response = await TwitterSearch.searchPosts({searchText});

            if(response?.data) {
                result = [...result,...response.data ];
            }

        }
    } else {
        let response = await TwitterSearch.searchPosts({hashtags});
        result = [...result,response.data ];
    }

    const mappedTwitterPosts = TwitterSearch.toReportModel(result);
    return mappedTwitterPosts && mappedTwitterPosts.length > 0 ? mappedTwitterPosts : [NO_DATA];
}

export const crawlSocialMedia = async (socialMediaSearch: socialMediaFilter[]): Promise<any> => {

    try {
        const response = {
            socials: []
        };

        for (let i = 0; i <= socialMediaSearch.length - 1; i++) {
            const socialMedia = socialMediaSearch[i];

            if (socialMedia.id === "reddit") {
                const { searchTerms, filterUnit, filterAmount, endpoint } = socialMedia
                const redditResult = await crawlInReddit(endpoint, searchTerms, filterAmount, filterUnit);
                response.socials.push({id: "reddit", data: redditResult});
            }

            if(socialMedia.id === "stackoverflow") {
                const { searchTerms, filterUnit, filterAmount } = socialMedia
                const stackoverflowResult = await crawlInStackoverflow(searchTerms, filterAmount, filterUnit);
                response.socials.push({id: "stackoverflow", data: stackoverflowResult});
            }

            if(socialMedia.id === "twitter") {
                const { searchTerms, hashtagsInput } = socialMedia
                const twitterResult =  await crawlInTwitter(hashtagsInput, searchTerms);
                response.socials.push({id: "twitter", data: twitterResult});
            }
        }

        return response;

    } catch (e) {
        console.log("=======Hermes failed to run ===========")
        console.log(`======= Here is the stack trace: ${e} ===========`)

        return {
            socials: []
        };
    }
}









