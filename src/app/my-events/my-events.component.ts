import { Component, OnInit } from '@angular/core';
import {EventService} from '../shared/event.service';
import {UserService} from '../shared/user.service';
import {Event} from '../../model/Event';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {
  listeEvent: Event[];
  constructor(private eventService: EventService, public userService: UserService , private route: Router){ }

  ngOnInit(): void {
    this.eventService.getEventByUser(+localStorage.getItem('id')).subscribe((data: Event[]) => this.listeEvent = data);

  }
delete(event1: Event){
this.eventService.deleteEvent(event1.id).subscribe(() =>
  this.listeEvent = this.listeEvent.filter(event => event.id != event1.id) );
}


}
