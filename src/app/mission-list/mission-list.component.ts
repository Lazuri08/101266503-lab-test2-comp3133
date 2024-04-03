import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  launches: Mission[] = [];
  filterYear: number|null=null;
  

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {
    this.getLaunches();
  }

  getLaunches() {
    this.http.get<Mission[]>('https://api.spacexdata.com/v3/launches').subscribe((data) => {
      this.launches = data.filter(launch => !this.filterYear ||launch.launch_year == this.filterYear);
    });
  }

  onSubmit() {
    this.getLaunches();
  }

  showMissionDetails(launch: any) {
    this.router.navigate(['/missionlist', launch.flight_number]);
  }

  
}

