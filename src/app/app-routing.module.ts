import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DetailPlaceComponent} from './detail-place/detail-place.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {DetailEventComponent} from './detail-event/detail-event.component';
import {AllEventComponent} from './all-event/all-event.component';
import {MyEventsComponent} from './my-events/my-events.component';
import {UpdateEventComponent} from './update-event/update-event.component';


const ROUTES: Routes = [
  {path : '', redirectTo: 'home', pathMatch: 'full'},
  { path : 'home', component : HomeComponent},
  {path : 'home/place/:id', component: DetailPlaceComponent},
  {path : 'home/myevent/update/:id', component: UpdateEventComponent},
  {path : 'home/ALLevent', component: AllEventComponent},
  {path : 'home/myevent', component: MyEventsComponent},
  { path : 'register', component : RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
