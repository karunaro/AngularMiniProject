import { Component, OnInit } from '@angular/core';
import {EventService} from '../shared/event.service';
import {UserService} from '../shared/user.service';
import {Event} from '../../model/Event';
import {Router} from '@angular/router';


@Component({
  selector: 'app-all-event',
  templateUrl: './all-event.component.html',
  styleUrls: ['./all-event.component.css']
})
export class AllEventComponent implements OnInit {
  listeEvent: Event[];

  constructor(private eventService: EventService, public userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.eventService.getEventWs().subscribe((data: Event[]) => this.listeEvent = data);

  }
  participate(event: Event){
    if (this.userService.isLoggedIn){
      const i = this.listeEvent.indexOf(event);
      this.listeEvent[i].members--;

      this.eventService.updateEvent( event.id, event).subscribe((Response: any) => {
        console.log(this.userService.isLoggedIn);
      }); }
    else {
      this.route.navigate(['/login']);
    }
  }}
