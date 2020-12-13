import { Component, OnInit } from '@angular/core';
import {PlacesService} from '../shared/places.service';
import {Place} from '../../model/Place';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../shared/event.service';
import {Event} from '../../model/Event';
import {UserService} from '../shared/user.service';
import {root} from 'rxjs/internal-compatibility';


@Component({
  selector: 'app-detail-place',
  templateUrl: './detail-place.component.html',
  styleUrls: ['./detail-place.component.css']
})

export class DetailPlaceComponent implements OnInit {
  hideform: boolean;
  id: number;
  listplaces: Place;
  listevent: Event[];
   myDate: Date;

  constructor(private service: ActivatedRoute , public userService: UserService, private servicePlaces: PlacesService, private serviceEvent: EventService, private route: Router) { }

  ngOnInit(): void {
    this.id = this.service.snapshot.params.id;
    this.servicePlaces.getPlace(this.id).subscribe((data: Place) => this.listplaces = data);
    console.log('dadad' + this.listplaces);
    this.serviceEvent.getEventByPlace(this.id).subscribe((data: Event[]) => this.listevent =  data );
    this.myDate = new Date();
    this.hideform = true;
  }
  changeform()
  {
    this.hideform = false;
  }
  pushEvent(event: Event){

    this.serviceEvent.postEvent(event).subscribe(
      () => this.listevent = [event, ...this.listevent]
    );
    this.hideform = true;
  }
  participate(event: Event){
    if (this.userService.isLoggedIn){
    const i = this.listevent.indexOf(event);
    this.listevent[i].members--;

    this.serviceEvent.updateEvent( event.id, event).subscribe((Response: any) => {
      console.log(this.userService.isLoggedIn);
    }); }
    else {
     this.route.navigate(['/login']);
    }
  }


}
