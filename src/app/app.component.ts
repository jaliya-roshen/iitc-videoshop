import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IitcService } from 'src/services/iitc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedFeature = 'main';
  disableMenu: boolean = true;

  constructor(private router: Router, private iitcService: IitcService) {}
  ngOnInit(): void {
    this.iitcService.receiveMessage().subscribe((data) => {
      console.log('debug subject', data);
      this.disableMenu = data;
    });
  }

  goToMember() {
    this.router.navigateByUrl('/member');
  }

  onNavigate(feature: any) {
    console.log(feature);
    this.loadedFeature = feature;
  }
}
