import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RentService {
  private url: string = '/assets/data/rent-details.json';

  constructor(private http: HttpClient) {}

  getRentDetails() {
    return this.http.get(this.url);
  }
}
