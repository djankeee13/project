import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeagueComponent } from './league/league.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StandingsComponent } from './standings/standings.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {path: "" ,redirectTo: 'app-home', pathMatch: "full" },
  {path: 'app-home', component: HomeComponent},
  {path: 'app-league', component: LeagueComponent},
  {path: 'app-teams', component: TeamsComponent},
  {path: 'app-standings', component: StandingsComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
