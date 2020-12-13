import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Place} from '../../model/Place';
import {Event} from '../../model/Event';
import {PlacesService} from '../shared/places.service';
import {UserService} from '../shared/user.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  @Input() event: Event;
  @Output() notification1 = new EventEmitter<Event>();
  @Output() notification2 = new EventEmitter<Event>();
  listplaces: Place;
  iduser = +localStorage.getItem('id');

  constructor(private servicePlaces: PlacesService , public serviceuser: UserService) { }

  ngOnInit(): void {
    this.servicePlaces.getPlace(this.event.placeId).subscribe((data: Place) => this.listplaces = data);
  }
  sendNotif2(){
    this.notification1.emit(this.event);
  }
  participate(){
  this.notification2.emit(this.event);
  }
}
