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
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css'],
})
export class NewMemberComponent implements OnInit {
  public form: FormGroup;
  memberTypes: any = [];
  selectedMemberType: string;

  constructor(
    formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primeConfig: PrimeNGConfig,
    private router: Router,
    private iitcService: IitcService,
    private storageService: StorageService
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
      memberType: ['', Validators.required],
    });

    this.memberTypes = [
      { name: 'Basic', code: 'BA' },
      { name: 'Premium', code: 'PR' },
    ];
  }

  ngOnInit() {
    this.primeConfig.ripple = true;
  }

  storageData() {
    const data = {
      name: this.form.value.name,
      mobile: this.form.value.mobile,
      type: this.form.value.memberType.name,
    };
    this.storageService.setItem('logData', data);
  }

  onSubmit(event: Event) {
    if (this.form.status === 'VALID') {
      this.iitcService.sendMessage(false);
      this.router.navigateByUrl('/movie');
    }

    this.storageData();
    /**
     * Tried to Transfer Data using Subject: didn't succeed
     */
    // console.log('form values', this.form.value);
    // this.iitcService.triggerMemberData({
    //   name: this.form.value.name,
    //   mobile: this.form.value.mobile,
    //   type: this.form.value.memberType.name,
    // });
  }
}
