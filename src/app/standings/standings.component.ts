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
  
    leagues: any[] = [
      {value: 'eng.1', viewValue: 'England'},
      {value: 'fra.1', viewValue: 'France'},
      {value: 'ger.1', viewValue: 'Germany'},
      {value: 'ita.1', viewValue: 'Italy'},
      {value: 'esp.1', viewValue: 'Spain'},
    ];
    selectedLeague = this.leagues[0].value;

  constructor( private api: ApiService) { }

  ngOnInit(): void {
    this.renderStanding('eng.1','2020')
  }
  
  renderStanding(pick: any,event : any){
     
    this.api.getSeason(pick, event )
    .subscribe(res => {
      this.data = res.data;
      this.stats = res.data.standings; 
     
     console.log(this.stats)  /* ???? */
    })
  
  }

}
