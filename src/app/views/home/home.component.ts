import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from 'src/app/services/common.service';
import { FeedService } from 'src/app/services/feed.service';
import { HomeFeed } from 'src/app/shared/models/feed';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  page: number = 1
  per_page: number = 10
  country: string = 'us'
  feedData: any[] = []
  hasLoadMore: boolean = true


  constructor(private feedService: FeedService, private spinner: NgxSpinnerService, private commonService: CommonService) { }

  ngOnInit(): void {
    this.getFeeds()

  }

  // get feed data
  getFeeds() {
    this.spinner.show();
    this.feedService.getFeedData(this.country, this.page, this.per_page).subscribe({
      next: next => {
        if (next.status === 'ok') {
          this.feedData = this.feedData.concat(next.articles)
          this.spinner.hide();
        }
      },
      error: error => {
        this.commonService.showError(error.error.message)
      }
    })
  }


  // onscroll for pagination
  onScroll() {
    if (this.page * this.per_page < 30) {
      this.page = this.page + 1
      this.getFeeds()
    } else {
      this.hasLoadMore = false
      return;
    }
  }

}
