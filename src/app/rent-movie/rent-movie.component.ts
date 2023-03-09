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
      console.log(data);
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

  calculateAmounts() {
    const basicMemberShipCost = 50;
    const dailyBookCostBasic = 5;
    const weeklyBookCostBasic = 25;

    const premiumMemberShipCost = 75;
    const dailyBookCostPremium = 3;
    const weeklyBookCostPremium = 15;

    this.totalAmount = 0;

    for (let i = 0; i < this.rentDetails.length; i++) {
      if (this.rentDetails[i].member.type === 'basic') {
        this.totalAmount += basicMemberShipCost;
        if (this.rentDetails[i].member.rent_type === 'Daily') {
          this.totalAmount += dailyBookCostBasic;
        } else if (this.rentDetails[i].member.rent_type === 'Weekly') {
          this.totalAmount += weeklyBookCostBasic;
        }
      } else if (this.rentDetails[i].member.type === 'premium') {
        this.totalAmount += premiumMemberShipCost;
        if (this.rentDetails[i].member.rent_type === 'Daily') {
          this.totalAmount += dailyBookCostPremium;
        } else if (this.rentDetails[i].member.rent_type === 'Weekly') {
          this.totalAmount += weeklyBookCostPremium;
        }
      }
    }
    return this.totalAmount;
  }

  retrieveData(): void {
    const retrievedData = this.storageService.getItem('logData');
    this.memberType = retrievedData.type;
    this.rentMovieForm.get('member_mobile')?.patchValue(retrievedData.mobile);
    this.rentMovieForm.get('member_name')?.patchValue(retrievedData.name);
    this.rentMovieForm.get('member_type')?.patchValue(retrievedData.type);
  }

  filterToSingleArray(data: any) {
    this.memberArr = data.data
      .reduce((acc: any, val: any) => acc.concat(val), [])
      .flat();
    console.log(this.memberArr);
  }
}
