import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    nesto!: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  this.renderData();
  }

  renderData(){
    this.api.getLeague()
    .subscribe(res => {
      this.nesto = res.data;
      console.log(this.nesto)
    })
  }

}
