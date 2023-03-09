import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentData } from 'src/core/interfaces';

@Injectable({
  providedIn: 'root',
})
export class RentService {
  private url: string = '/assets/data/rent-details.json';

  constructor(private http: HttpClient) {}

  getRentDetails(): Observable<RentData> {
    return this.http.get<RentData>(this.url);
  }
}
