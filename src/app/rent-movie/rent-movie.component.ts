import { Component, OnInit } from '@angular/core';
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
  memberArr = [];
  rentDetails: any = [];
  rentingType: any;
  SelectedRentType: any;
  rentTypes: any = [];
  value: any;
  filterData: any[];

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
      console.log('Rent Movie details', data);
      this.rentDetails = data;
    });

    this.retrieveData();
  }

  filterMovieData(filterValue: Event): void {
    const value = (filterValue.target as HTMLInputElement).value;
    this.filterData = this.rentDetails.filter(
      (item: { member: { mobile: string } }) => {
        item.member.mobile.toLowerCase().includes(value);
      }
    );
  }

  MovieForm(): void {
    this.rentMovieForm = this.formBuilder.group({
      member_mobile: [''],
      member_name: [''],
      member_type: [''],
    });
  }

  retrieveData(): void {
    const retrievedData = this.storageService.getItem('logData');
    console.log('local data', retrievedData);
    this.rentMovieForm.get('member_mobile')?.patchValue(retrievedData.mobile);
    this.rentMovieForm.get('member_name')?.patchValue(retrievedData.name);
    this.rentMovieForm.get('member_type')?.patchValue(retrievedData.type);
  }
}
