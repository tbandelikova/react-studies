export type CardPropsType = {
  id: number;
  title: string;
  img: string;
  price: string;
  text: string;
  tags: Array<string>;
};

export type SearchPropsType = {
  search: (arg: string) => void;
};
