import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private _http: HttpClient) { }

 getMessage():Observable<Movie[]>{
 return  this._http.get(environment.endPointApi).pipe(map((response:any)=>{
        return response.results
  }));
  }}


