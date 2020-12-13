import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Event} from '../../model/Event';
import {UserService} from '../shared/user.service';
import {User} from '../../model/user';
import {Place} from '../../model/Place';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit {
event: Event;
  @Output() eventSaveEvent = new EventEmitter<Event>();
  @Input()id: number;
  user: User ;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.event = new Event();
    this.userService.getUser(+localStorage.getItem('id')).subscribe((data: User) => this.user = data);

  }
  save() {
    this.event.placeId = this.id ;
    this.event.userId = this.user.id;
    this.event.host = this.user.nom;

    this.eventSaveEvent.emit(this.event);
  }

}
