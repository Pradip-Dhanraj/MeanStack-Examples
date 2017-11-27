import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  //arry : any =[];
  constructor() { }

  ngOnInit() {
  }

 arry = [{
   id:'1',
   title:'title 1',
  url:'https://www.youtube.com/watch?v=fJDbQbgwUUc&index=21&list=PLC3y8-rFHvwj200LLotCYum_9wmGeTJx9',
  desc:'timepass'
 },
 {
  id:'2',
  title:'title 2',
 url:'www.timepas.com',
 desc:'timepass'
},
{
  id:'3',
  title:'title 3',
 url:'www.timepas.com',
 desc:'timepass'
},
{
  id:'4',
  title:'title 4',
 url:'www.timepas.com',
 desc:'timepass'
},];

selectedValue : any;

onVideoSelected(vid : any)
{
  this.selectedValue = vid;
  console.log('function called from Main video component with data '+ this.selectedValue );

}


}
