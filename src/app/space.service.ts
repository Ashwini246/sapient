import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Programs} from './models/programs';
import {catchError, tap} from 'rxjs/operators';
import {SpaceInput} from './models/space-input';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  private spaceUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  /** GET heroes from the server */
  getPrograms(): Observable<Programs[]> {
    const url = this.spaceUrl;
    // if (payload.launchYear) {
    //   url += `&launch_year=${payload.launchYear}`;
    // }
    // if (payload.successful_landing) { url += `&land_success=${payload.successful_landing}`; }
    // if (payload.successful_launch) { url += `&launch_success=${payload.successful_launch}`; }
    return this.http.get<Programs[]>(url)
      .pipe(
        tap(_ => console.log('fetched programs')),
      );
  }
}
