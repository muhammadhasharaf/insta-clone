import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private api: ApiService) {

  }

  //  get feed data with pagination
  getFeedData(country: string, page: number, per_page: number) {
    let endpoint = 'top-headlines'
    if (country) {
      endpoint = endpoint + '?country=' + country
    }
    if (page) {
      endpoint = endpoint + '&page=' + page
    }
    if (per_page) {
      endpoint = endpoint + '&pageSize=' + per_page
    }
    return this.api.get(endpoint)
  }
}
