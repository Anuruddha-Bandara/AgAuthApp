import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
  
@Injectable({  
  providedIn: 'root'  
})  
export class EventService {  
  
  private _eventsUrl = "api/events";  
  private _paidEventsUrl = "api/paidEvents";  
  
  constructor(private http: HttpClient) { }  
  
  getEvents() {  
    return this.http.get<any>(this._eventsUrl);  
  }  
  
  getPaidEvents() {  
    return this.http.get<any>(this._paidEventsUrl);  
  }  
} 