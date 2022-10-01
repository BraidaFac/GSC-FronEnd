import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisApiService {

  constructor(private _http :HttpClient) {

  }

  getMessage():Observable<string>{
    return this._http.get<string>(`${environment.api}/jokes/random`);
  }
}
