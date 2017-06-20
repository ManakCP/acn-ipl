import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatchService } from './match.service';
import { AppComponent } from './app.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { ScoreCardComponent } from './score-card/score-card.component';
import { UniquePipe } from './unique.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MatchDetailComponent,
    ScoreCardComponent,
    UniquePipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
