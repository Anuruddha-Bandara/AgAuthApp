import { Component, OnInit } from '@angular/core';  
import { AuthService } from '../_services/auth.service';  
import { EventService } from '../_services/event.service';  
  
@Component({  
  selector: 'app-paid-events',  
  templateUrl: './paid-events.component.html',  
  styleUrls: ['./paid-events.component.css']  
})  
export class PaidEventsComponent implements OnInit {  
  
  public events: any[];   
  constructor(private _eventService: EventService) { }  
  
  getAllEvents(){  
    this._eventService.getPaidEvents().subscribe(    
      data => this.events = data,    
      error => console.log('Error in getting event list'),    
        () => {console.log('success to get event list...');    
      });   
  }  
  
  ngOnInit(): void {  
    this.getAllEvents();  
  }  
}