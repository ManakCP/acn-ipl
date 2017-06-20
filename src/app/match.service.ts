import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MatchService {

  constructor(private _http: Http) { }
  
  getMatches() {
    return this._http.get('../assets/matches.json').map((x: Response) => x.json())
  }

}
