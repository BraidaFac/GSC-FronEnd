import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAdressComponent } from './event-adress.component';

describe('EventAdressComponent', () => {
  let component: EventAdressComponent;
  let fixture: ComponentFixture<EventAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAdressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
