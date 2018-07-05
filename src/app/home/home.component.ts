import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  titles: Tile[] = [
    {text: 'Three', cols: 3, rows: 3, color: 'lightpink'},
    {text: 'Three', cols: 3, rows: 3, color: 'black'},
    {text: 'Three', cols: 3, rows: 3, color: 'lightgray'}
] ;
  
   color="red"
  constructor() { }

  ngOnInit() {
  }

}
