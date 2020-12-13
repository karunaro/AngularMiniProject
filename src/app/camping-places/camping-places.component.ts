import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../../model/Place';

@Component({
  selector: 'app-camping-places',
  templateUrl: './camping-places.component.html',
  styleUrls: ['./camping-places.component.css']
})
export class CampingPlacesComponent implements OnInit {
@Input() places: Place;
  constructor() { }

  ngOnInit(): void {
  }

}
