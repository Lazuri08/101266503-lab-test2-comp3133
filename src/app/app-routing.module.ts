import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionDetailsComponent } from './mission-details/mission-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/missionlist', pathMatch: 'full' },
  { path: 'missionlist', component: MissionListComponent },
  { path: 'missionlist/:flight_number', component: MissionDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
