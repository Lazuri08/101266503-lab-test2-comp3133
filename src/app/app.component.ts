import { Component, OnInit } from '@angular/core';
import { ApiService } from './network/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  launches: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    
    this.apiService.getLaunches().subscribe((data: any) => {
      console.log("test api")
      this.launches = data;
    });
  }
}