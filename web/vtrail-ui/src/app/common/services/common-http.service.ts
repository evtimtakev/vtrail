import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {

  constructor(private http: HttpClient) { }

  fetchSocialMediaPosts(body: any) {
    return this.http.post("/v1/crawler/collect", body)
  }

  makePredictions(body: any) {
      return this.http.post("/api/predict", body)
  }
}
