import { Component, OnInit } from '@angular/core';
import {Place} from '../../model/Place';
import {PlacesService} from '../shared/places.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listplaces: Place[];
  constructor(private servicePlaces: PlacesService) { }

  ngOnInit(): void {
this.servicePlaces.getPlacesWs().subscribe((data: Place[]) => this.listplaces = data);
scrollTo();
  }


}
