export interface MemberDetails {
  mobile: string;
  name: string;
  type: string;
}

export interface RentData {
  member: RentDetails;
}

export interface RentDetails {
  mobile: string;
  name: string;
  type: string;
  selected: {
    movie_name: string;
    movie_type: string;
    return_date: string;
  };
  rent_type: string;
}

export interface Movie {
  name: string;
  type: string;
  Status: boolean;
  date: string;
  language: string;
}

