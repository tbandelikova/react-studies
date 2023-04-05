import { APICardPropsType } from '../types/types';

export const Card = function Card(props: APICardPropsType) {
  const { name, profile_image, total_photos, bio, location } = props;
  return (
    <div className="card">
      <div className="card-img">
        <img src={profile_image.large} alt="profile image" />
      </div>
      <div className="card-content">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Total photos: <span className="card-price">{total_photos}</span>
        </p>
        <p className="card-text card-bio">{bio}</p>
        <p className="card-text">{location}</p>
      </div>
    </div>
  );
};
