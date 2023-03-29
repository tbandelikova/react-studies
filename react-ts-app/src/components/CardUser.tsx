import React, { Component } from 'react';

type CardProps = {
  name: string;
  birthday: string;
  gender: string;
  location: string;
  img: string;
};

class CardUser extends Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, img, birthday, gender, location } = this.props;
    return (
      <div className="card">
        <div className="card-img">
          <img src={img} alt="avatar" />
        </div>
        <div className="card-content">
          <h5 className="card-title">{name}</h5>
          <p className="card-price">{birthday}</p>
          <p className="card-text">{gender}</p>
          <p className="card-text">{location}</p>
        </div>
      </div>
    );
  }
}

export default CardUser;
