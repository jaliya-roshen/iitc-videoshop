import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentMovieComponent } from './rent-movie.component';

describe('RentMovieComponent', () => {
  let component: RentMovieComponent;
  let fixture: ComponentFixture<RentMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
