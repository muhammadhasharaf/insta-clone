import { Component, Input, OnInit } from '@angular/core';
import { HomeFeed } from 'src/app/shared/models/feed';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  user = '../../../assets/img/user.jpg'

  @Input() data!: Partial<HomeFeed>

 

  constructor() { }

  ngOnInit(): void {
    this.data.collapse = false
  }

  
  checkTitleLength() {
    let isMoreAllow = false
    if (this.data.title) {
      if (this.data.title.length > 50) {
        isMoreAllow = true
      }
    }
    return isMoreAllow;
  }

 

}
