import { UserCardPropsType } from '../types/types';

export const CardUser = function CardUser(props: UserCardPropsType) {
  const { name, img, birthday, gender, location } = props;
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="avatar" />
      </div>
      <div className="card-content">
        <h5 className="card-title">{name}</h5>
        <p className="card-price">{location}</p>
        <p className="card-text">{birthday}</p>
        <p className="card-text">{gender}</p>
      </div>
    </div>
  );
};
