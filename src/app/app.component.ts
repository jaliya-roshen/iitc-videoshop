import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IitcService } from 'src/services/iitc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  disableMenu: boolean = true;
  messageSubscription: Subscription;

  constructor(private router: Router, private iitcService: IitcService) {}

  ngOnInit(): void {
    /**
     * This service used to enable navigation
     * according to the user login
     */
    this.messageSubscription = this.iitcService
      .receiveMessage()
      .subscribe((data) => {
        this.disableMenu = data;
      });
  }

  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
  }
}
