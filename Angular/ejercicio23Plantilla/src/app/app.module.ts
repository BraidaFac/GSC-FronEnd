import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EventsListComponent } from './events-list/events-list.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NameDirective } from './name.directive';

import { DateValidatorDirective } from './date-validator.directive';
import { ValidacionesPropiasDirective } from './mayus-validator.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    CreateEventComponent,
    NameDirective,
    ValidacionesPropiasDirective,
    DateValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
