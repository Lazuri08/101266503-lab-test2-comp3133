import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent {
  @Input() mission: any; 

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const flight_number = this.route.snapshot.paramMap.get('flight_number');
    this.http.get(`https://api.spacexdata.com/v3/launches/${flight_number}`).subscribe(
      (response) => {
        this.mission = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
