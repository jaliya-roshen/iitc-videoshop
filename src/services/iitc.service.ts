import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IitcService {
  private subject = new Subject<any>();
  private sendMemberData = new Subject<any>();

  constructor() {}

  sendMessage(value: boolean): void {
    this.subject.next(value);
  }

  receiveMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  triggerMemberData(data: any) {
    this.sendMemberData.next({ data });
  }

  getMemberData(): Observable<void> {
    return this.sendMemberData.asObservable();
  }
}
