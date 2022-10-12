import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { httpFactory } from '@angular/http/src/http_module';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../http-service.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  movieList: Movie[];

  constructor(private _service: HttpServiceService) { }

  ngOnInit() {
  }

  makeRequest(): void {

    this._service.getMessage().subscribe({ next: (movies) => this.movieList = movies })

  }
}

