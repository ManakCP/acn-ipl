import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit, OnChanges {
  @Input() matchDetail = [];
  showDetails = false;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.showDetails = this.matchDetail !== undefined ? true : false;
  }

}
