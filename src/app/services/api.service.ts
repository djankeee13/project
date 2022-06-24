import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
 /*  getSomething( ){
    return this.http.get<any>('https://api-football-standings.azharimm.site/leagues/eng.1/seasons')
  } */
 /*   getSeason(){
    return this.http.get<any>('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2020&sort=asc')
  }  */
  getSeason(id: any){
    return this.http.get<any>(`https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=${id}&sort=asc`)
  } 
 
  getLeague(){
    return this.http.get<any>('https://api-football-standings.azharimm.site/leagues')
  }

  getVideos(){
    return this.http.get<any>(environment.baseUrl,{
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
    })
  }
}
