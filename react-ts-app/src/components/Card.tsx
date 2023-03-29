import React, { Component } from 'react';

type CardProps = {
  id: number;
  title: string;
  img: string;
  price: string;
  text: string;
  tags: Array<string>;
};

class Card extends Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, img, price, text, tags } = this.props;
    return (
      <div className="card">
        <div className="card-img">
          <img src={img} alt={title} />
        </div>
        <div className="card-content">
          <h5 className="card-title">{title}</h5>
          <p className="card-price">{price}</p>
          <p className="card-text">{text}</p>
          <div className="card-tags">
            {tags.map((tag, index) => (
              <span className="tag" key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
