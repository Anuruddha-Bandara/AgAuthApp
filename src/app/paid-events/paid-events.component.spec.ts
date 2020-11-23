import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidEventsComponent } from './paid-events.component';

describe('PaidEventsComponent', () => {
  let component: PaidEventsComponent;
  let fixture: ComponentFixture<PaidEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
