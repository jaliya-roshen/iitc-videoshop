import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IitcService {
  private subject = new Subject<any>();

  constructor() {}

  sendMessage(value: boolean): void {
    this.subject.next(value);
  }

  receiveMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
