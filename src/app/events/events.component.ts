import { Component, OnInit } from '@angular/core';  
import { EventService } from '../_services/event.service';  
  
@Component({  
  selector: 'app-events',  
  templateUrl: './events.component.html',  
  styleUrls: ['./events.component.css']  
})  
export class EventsComponent implements OnInit {  
  
  public events: any[];   
  constructor(private _eventService: EventService) { }  
  
  getAllEvents(){  
    this._eventService.getEvents().subscribe(    
      data => this.events = data,    
      error => console.log('Error in getting event list ', error),    
        () => {console.log('success to get event list...');    
      });   
  }  
  ngOnInit(): void {  
    this.getAllEvents();  
  }  
} 