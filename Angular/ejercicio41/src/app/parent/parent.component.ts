import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import{} from 'rxjs'


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  obs;
  result;
  promise;

  constructor() {
    this.obs = of(35);
  }

  ngOnInit() {

    this.promise= new Promise((resolve,reject)=>{

    this.obs.subscribe(val=>{
     next: resolve(val);
    })})}

    // ingrese el código aquí


  listen() {
    this.promise.then((val) => {
      this.result = val;

    })
  }

}
