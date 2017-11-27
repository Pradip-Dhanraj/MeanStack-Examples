import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css'],
  inputs:['arry'],
  outputs:['selectedVideo']
})
export class VideosListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public selectedVideo = new EventEmitter();


  clickOnItem(vid : any)
  {
    console.log(`Clicked on ${vid.title} from list !!`);
    this.selectedVideo.emit(vid);
  }
}
