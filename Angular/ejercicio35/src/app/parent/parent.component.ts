import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  movies = [
    { name:  "Star Wars Episode X", rating: "PG" },
    { name:  "Rocky XV", rating: "PG-13" },
    { name:  "Jaws the Revenge", rating: "R" },
    { name:  "Avengers 6 - The Marriage of the Hulk", rating: "PG-13" },
    { name:  "Finding Dory's Grandkids", rating: "G" },
  ];

  constructor() { }

  ngOnInit() {
  }

  sortAsc() {
    this.movies=this.movies.sort((film1,film2)=>{
    if(film1.rating<film2.rating)return 1
    else if(film1.rating>film2.rating)return -1
    else return 0}
    )
  }

  sortDesc() {
    this.movies=this.movies.sort((film1,film2)=>{
      if(film1.rating<film2.rating)return -1
      else if(film1.rating>film2.rating)return 1
      else return 0}
      )
  }
}
