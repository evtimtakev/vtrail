import {GET} from "../common/decorators/http/get";
import * as dotenv from 'dotenv';
import {HttpRequest} from "../common/models/http/http-request.model";
import {PrintReportEntryModel} from "../common/models/print-report.model";
import moment from "moment";
dotenv.config()

export class SubredditSearch {

    @GET(null, {"User-Agent": "MockClient/0.1 by Me"})
    public static searchInSubreddit(subreddit: string, term: string): HttpRequest | any {
        return {
            url: SubredditSearch.buildUrl(subreddit),
            params: {
                q: term,
                limit: 50,
                sort: "new",
                restrict_sr: "on"
            }
        };
    }

    public static buildUrl(subreddit: string): string {
        return process.env.REDDIT_URL + "/r/" + subreddit + "/search.json";
    }

    public static toReportModel(subREDDITPosts: any[]): PrintReportEntryModel[] {
        return subREDDITPosts.map(({ data }) => ({
            description: data.selftext,
            title: data.title,
            url: data.url,
            created: moment.unix(data.created_utc).format("MM/DD/YYYY")
        }))
    }

}
