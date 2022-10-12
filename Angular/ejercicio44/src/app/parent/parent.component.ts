import { Component, OnInit } from '@angular/core';
import { Clima } from '../clima';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  appid = "69bc9bb1bbaa496601358677ea57a017";
  forecast:Clima;
  city;

  constructor(private _service :HttpServiceService) { }

  ngOnInit() {
  }

  makeRequest() {
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&APPID=" + this.appid;
    this._service.getWeatherToday(url).subscribe(data=>this.forecast=data);

  }

}
