import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {
  leagues!: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.renderLeague();
  }
  renderLeague(){
    this.api.getLeague()
    .subscribe(res => {
      this.leagues = res.data;
      console.log(this.leagues)
    })
  }
}
