import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clima } from './clima';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private _service :HttpClient) { }

  getWeatherToday(url):Observable<Clima>{
    return this._service.get<Clima>(url);
  }
}
