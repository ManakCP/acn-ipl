import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {
  @Input() selectedMatches = [];
  @Output() notify: EventEmitter<any[]> = new EventEmitter<any[]>()

  constructor() { }

  ngOnInit() {
  }

  oneMatchSelect(event) {
    this.notify.emit(event);
  }

}
