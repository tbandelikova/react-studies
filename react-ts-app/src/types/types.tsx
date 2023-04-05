export type InitialCardPropsType = {
  id: number;
  title: string;
  img: string;
  price: string;
  text: string;
  tags: Array<string>;
};

type ImageURL = { [key: string]: string };

export type APICardPropsType = {
  id: string;
  name: string;
  profile_image: ImageURL;
  total_photos: number;
  bio: string;
  location: string;
};

export type UserCardPropsType = {
  name: string;
  birthday: string;
  gender: string;
  location: string;
  img: string;
};

export type SearchPropsType = {
  search: (arg: string) => void;
};

enum GenderEnum {
  female = 'Female',
  male = 'Male',
}
enum LocationEnum {
  Belarus = 'Belarus',
  Ukraine = 'Ukraine',
  Poland = 'Poland',
  Lithuania = 'Lithuania',
}

export interface IFormInput {
  name: string;
  date: string;
  gender: GenderEnum;
  location: LocationEnum;
  file: FileList;
  consent: boolean;
}
