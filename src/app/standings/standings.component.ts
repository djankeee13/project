import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})

export class StandingsComponent implements OnInit {
    data!: any;
    stats!: any;
    id: any = '2020';
    year: any;
  constructor( private api: ApiService) { }

  ngOnInit(): void {
    this.renderStanding(event)
  }
  
  renderStanding(event : any){
      if(!event){
        event = 2020;
      }
    this.api.getSeason(event )
    .subscribe(res => {
      this.data = res.data;
      this.stats = res.data.standings; 
     /*  console.log(this.data) */
     console.log(this.stats)  /* ???? */
    })
   /*  for (let i=0; i<20; i++){
      console.log();
    } */
  }

}
