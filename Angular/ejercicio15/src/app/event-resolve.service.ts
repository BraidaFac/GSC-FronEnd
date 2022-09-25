import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Event } from './event';
import { EventServiceService } from './event-service.service';

@Injectable({
  providedIn: 'root'
})
export class EventResolveService implements Resolve<Event[]>{

  constructor(private _serviceEvent :EventServiceService) {
  }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<Event[]>|Promise<Event[]>|Event[] {
    return this._serviceEvent.getEvents();
    }
}
