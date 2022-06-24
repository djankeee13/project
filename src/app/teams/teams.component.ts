import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  constructor(private api: ApiService) { }
  videos! : any;
  ngOnInit(): void {
    this.renderVideos();
  }
  renderVideos(){
    this.api.getVideos()
    .subscribe({
      next: (res)=>{
        this.videos = res;
        console.table(this.videos);
      }
    })
  }
}
