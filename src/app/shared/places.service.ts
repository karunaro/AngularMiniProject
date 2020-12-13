import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Place} from '../../model/Place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  listPlaces: Place;

  constructor(private http: HttpClient) {
  }

  getPlacesWs() {
    return this.http.get<Place[]>('http://localhost:3000/places');
  }
  getPlace(id){
    return this.http.get<Place>('http://localhost:3000/places/' + id);
  }
  searchPlace(search){
    return this.http.get<Place[]>('http://localhost:3000/places?name_like=' + search);
  }
}
