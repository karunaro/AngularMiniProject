import { Component, OnInit } from '@angular/core';
import {PlacesService} from '../shared/places.service';
import {Router} from '@angular/router';
import {Place} from '../../model/Place';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 chaine = '';
 searchResult: Place[];
  constructor(private placeService: PlacesService , private router: Router ) {
    this.searchResult = [];
  }

  ngOnInit(): void {
  }
  search(){
    const name = this.chaine.trim();
    if (name.length)
    {
      this.placeService.searchPlace(name).subscribe(
        ( places: Place[]) => {this.searchResult = places; }
      );
    } else {
      this.searchResult = [];

    }

  }
selectPlace(place: Place)
{
  this.router.navigate(['home/place/', place.id]);
  this.searchResult = [];
  this.chaine = '';
}
}
