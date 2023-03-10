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
import { LoginService } from 'src/services/login.service';
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
  isInvalid: boolean = true;

  constructor(
    formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router,
    private iitcService: IitcService,
    private storageService: StorageService,
    private loginService: LoginService
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

  ngOnInit() {}

  /**
   * Store data in local Storage
   */
  private storageData(): void {
    const data = {
      name: this.form.value.name,
      mobile: this.form.value.mobile,
      type: this.form.value.memberType.name,
    };
    this.storageService.setItem('logData', data);
  }

  onSubmit(event: Event): void {
    // Check form is valid for not and activate movie search according to it
    const formStatus = this.form.status;
    if (formStatus === 'VALID') {
      //Activate router guard here
      if (this.loginService.login(formStatus)) {
        this.router.navigate(['/movie']);
      }
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
