import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  reelsIcon='../../../assets/img/reels.svg'
  user='../../../assets/img/user.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
