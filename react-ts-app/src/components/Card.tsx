import { useState } from 'react';
import { Modal } from '../components/Modal/Modal';

import { APICardPropsType } from '../types/types';

export const Card = function Card(props: APICardPropsType) {
  const [isModal, setIsModal] = useState(false);
  const { name, image, status, species, type, gender, origin, location } = props;
  return (
    <>
      <div className="card" onClick={() => setIsModal(true)}>
        <div className="card-img">
          <img src={image} alt={`${name}-image`} />
        </div>
        <div className="card-content">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Species: <span className="card-price">{species}</span>
          </p>
          <ul className="additional">
            <li className="card-text">Current status: {status}</li>
            <li className="card-text">Gender: {gender}</li>
            <li className="card-text">Origin: {origin.name}</li>
            <li className="card-text">Location: {location.name}</li>
            {type ? <li className="card-text">Type or subspecies: {type}</li> : null}
          </ul>
        </div>
      </div>
      {isModal ? (
        <Modal isModal={isModal} setIsModal={setIsModal} child={<Card {...props} />} />
      ) : null}
    </>
  );
};
