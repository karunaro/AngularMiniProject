import { Component, OnInit } from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Place} from '../../model/Place';
import {Event} from '../../model/Event';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  id: number;
  event: Event;
  constructor(private service: ActivatedRoute,private eventSercive: EventService , private route: Router) { }

  ngOnInit(): void {
    this.id = this.service.snapshot.params.id;
    this.eventSercive.getEvent(this.id).subscribe((data: Event) => this.event = data);
  }
  save(){
    this.eventSercive.updateEvent( this.id, this.event).subscribe((Response) =>{
      this.route.navigate(['/home/myevent']);
    });
  }
  cancel(){
    this.route.navigate(['/home/myevent']);
  }

}
