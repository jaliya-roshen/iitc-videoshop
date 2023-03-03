import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
  PrimeNGConfig,
} from 'primeng/api';
import { IitcService } from 'src/services/iitc.service';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css'],
})
export class NewMemberComponent implements OnInit {
  public form: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primeConfig: PrimeNGConfig,
    private router: Router,
    private iitcService: IitcService
  ) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
        ],
      ],
    });
  }

  ngOnInit() {
    this.primeConfig.ripple = true;
  }

  onSubmit(event: Event) {
    console.log('on Submit Clicked');
    if (this.form.status === 'VALID') {
      this.iitcService.sendMessage(false);
      this.router.navigateByUrl('/movie');
    }
  }
}
