import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { pipe, Subject } from 'rxjs';
import{map} from 'rxjs/operators'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  subject;
  output:string[] = [];

  constructor() {
    this.subject = new Subject();
   }

  ngOnInit() {
    this.subject
    .pipe(map((tecla:any) => tecla.toUpperCase())).subscribe((mayus:string)=>{
      this.output.push(mayus)
      console.log(this.output.toString())})

  }
  keypress(e) {
    this.subject.next(e.key);
  }

}
