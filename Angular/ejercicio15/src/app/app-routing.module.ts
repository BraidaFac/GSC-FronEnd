import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventResolveService } from './event-resolve.service';
import { EventsListComponent } from './events-list/events-list.component';
import { GuardDetailsGuard } from './guard-details.guard';

const routes: Routes = [{
  'path':'events',
  'component': EventsListComponent,
  resolve: {
    events: EventResolveService
      }
},
{ 'path':'details/:id',
  'component':EventDetailComponent, canActivate:[GuardDetailsGuard],canDeactivate:[GuardDetailsGuard]},
{'path':'',
redirectTo: 'events',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
