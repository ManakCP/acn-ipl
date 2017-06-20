import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { MatchService } from './match.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MatchService]
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  matches = [];
  sessions = [];
  selectedSeason;
  selected_matches = [];
  match_detail = [];
  constructor(private _service: MatchService) {}
  ngOnInit() {
    this.subscription = this._service.getMatches().subscribe(res => this.match(res));
  }

  match(result) {
    this.matches = result;
    this.selected_matches = this.matches.filter(a => Number(a.season) === 2008);
  }

  onSeasonSelect(sesason) {
    const seasonValue: number = Number(sesason.split('-')[1].trim());
    this.selected_matches = this.matches.filter(a => Number(a.season) === seasonValue);
  }
  onMatchDetailSelected(eventData) {
    this.match_detail = eventData;
  }
  reset() {
    this.selected_matches = [];
    this.match_detail = [];
    this.ngOnInit();
  }

   ngOnDestroy() {
     this.subscription.unsubscribe();
   }

}
