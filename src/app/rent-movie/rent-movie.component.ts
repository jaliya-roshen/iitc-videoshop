import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MemberDetails } from 'src/core/interfaces';
import { IitcService } from 'src/services/iitc.service';
import { RentService } from 'src/services/rent.service';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-rent-movie',
  templateUrl: './rent-movie.component.html',
  styleUrls: ['./rent-movie.component.css'],
})
export class RentMovieComponent implements OnInit {
  rentMovieForm: FormGroup;
  memberData: MemberDetails = {
    mobile: '',
    name: '',
    type: '',
  };
  memberArr: any = [];
  rentDetails: any = [];
  rentingType: any;
  SelectedRentType: string;
  rentTypes: any = [];
  value: any;
  filterData: any[];
  memberType: string;
  totalAmount: any;
  nameOfMovie: string;

  constructor(
    private formBuilder: FormBuilder,
    private iitcService: IitcService,
    private rentService: RentService,
    private storageService: StorageService
  ) {
    this.rentTypes = [
      { name: 'Daily', code: 'D' },
      { name: 'Weekly', code: 'W' },
    ];
  }

  ngOnInit(): void {
    this.MovieForm();

    this.rentService.getRentDetails().subscribe((data) => {
      this.rentDetails = data;
    });

    // this.iitcService.getMemberData().subscribe((data: any) => {
    //   this.rentDetails = data.data
    //     .reduce((acc: any, val: any) => acc.concat(val), [])
    //     .flat();

    //   this.nameOfMovie = this.rentDetails[0].name;
    //   console.log('memberArr', this.rentDetails);
    // });

    this.retrieveData();
  }

  MovieForm(): void {
    this.rentMovieForm = this.formBuilder.group({
      member_mobile: [''],
      member_name: [''],
      member_type: [''],
    });
  }

  //TODO: Need to enhance this login with UI enhancement
  calculateAmounts(): any {
    const BASIC_MEMBERSHIP_COST = 50;
    const DAILY_BOOK_COST_BASIC = 5;
    const WEEKLY_BOOK_COST_BASIC = 25;

    const PREMIUM_MEMBERSHIP_COST = 75;
    const DAILY_BOOK_COST_PREMIUM = 3;
    const WEEKLY_BOOK_COST_PREMIUM = 15;

    this.totalAmount = 0;

    for (let i = 0; i < this.rentDetails.length; i++) {
      if (this.rentDetails[i].member.type === 'basic') {
        this.totalAmount += BASIC_MEMBERSHIP_COST;
        if (this.rentDetails[i].member.rent_type === 'Daily') {
          this.totalAmount += DAILY_BOOK_COST_BASIC;
        } else if (this.rentDetails[i].member.rent_type === 'Weekly') {
          this.totalAmount += WEEKLY_BOOK_COST_BASIC;
        }
      } else if (this.rentDetails[i].member.type === 'premium') {
        this.totalAmount += PREMIUM_MEMBERSHIP_COST;
        if (this.rentDetails[i].member.rent_type === 'Daily') {
          this.totalAmount += DAILY_BOOK_COST_PREMIUM;
        } else if (this.rentDetails[i].member.rent_type === 'Weekly') {
          this.totalAmount += WEEKLY_BOOK_COST_PREMIUM;
        }
      }
    }
    return this.totalAmount;
  }

  /**
   * Since fail to load data from movie search component
   * get the login user data from local Storage
   */

  //TODO: Need to modify to get data without local storage
  private retrieveData(): void {
    const retrievedData = this.storageService.getItem('logData');
    this.memberType = retrievedData.type;
    this.rentMovieForm.get('member_mobile')?.patchValue(retrievedData.mobile);
    this.rentMovieForm.get('member_name')?.patchValue(retrievedData.name);
    this.rentMovieForm.get('member_type')?.patchValue(retrievedData.type);
  }
}
