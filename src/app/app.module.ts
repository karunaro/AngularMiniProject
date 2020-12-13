import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampingPlacesComponent } from './camping-places/camping-places.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DetailPlaceComponent } from './detail-place/detail-place.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AgmCoreModule} from '@agm/core';
import { EventsComponent } from './events/events.component';
import { DetailEventComponent } from './detail-event/detail-event.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AllEventComponent } from './all-event/all-event.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    CampingPlacesComponent,
    HomeComponent,
    DetailPlaceComponent,
    PageNotFoundComponent,
    EventsComponent,
    DetailEventComponent,
    RegisterComponent,
    LoginComponent,
    AllEventComponent,
    MyEventsComponent,
    UpdateEventComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDBai2PCnbyxd-tI2-4m-ZgMTSNiPwUYCs',
      libraries: ['places']
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
