import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Event} from '../../model/Event';
import {Place} from '../../model/Place';
@Injectable({
  providedIn: 'root'

})
export class EventService {
  listeEvent: Event;
  url = 'http://localhost:3000/event/';

  constructor(private http: HttpClient) { }
  getEventWs() {
    return this.http.get<Event[]>(this.url);
  }
  getEvent(id){
    return this.http.get<Event>(this.url + id);
  }
  getEventByPlace(id){
    return this.http.get<Event[]>( 'http://localhost:3000/places/' + id + '/event');
  }
  getEventByUser(id){
    return this.http.get<Event[]>( 'http://localhost:3000/users/' + id + '/event');
  }
  postEvent(event: Event){
    return this.http.post(this.url, event);
  }
  deleteEvent(id) {
    return this.http.delete(this.url + id);
  }
  updateEvent(id, event: Event) {
    return this.http.put(this.url + id, event);
  }


}

