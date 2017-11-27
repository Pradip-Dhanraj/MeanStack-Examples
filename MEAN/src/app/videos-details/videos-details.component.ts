import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'videos-details',
  templateUrl: './videos-details.component.html',
  styleUrls: ['./videos-details.component.css'],
  inputs:['selectedValue']
})
export class VideosDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
