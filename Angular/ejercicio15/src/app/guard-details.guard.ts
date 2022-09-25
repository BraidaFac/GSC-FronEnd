import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventServiceService } from './event-service.service';

@Injectable({
  providedIn: 'root'
})
export class GuardDetailsGuard implements CanActivate, CanDeactivate<EventDetailComponent>{
  constructor(private _eventService : EventServiceService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id=route.paramMap.get('id')
      if (!id){
      return false;
    }
    else if (!this._eventService.getEventById(id)){
      return false;
    }
      return true;
    }
    canDeactivate(
      component: EventDetailComponent,
      currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot,
      nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!component.reviewed){
        return false;
      }
        return true;
    }}
