import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private router: Router) {}

  onLoaderMember() {
    console.log('button triggered');
    this.router.navigate(['/member']);
  }
}
