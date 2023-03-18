import React, { Component } from 'react';

class Card extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }
  render() {
    return (
      <div className="card">
        <div className="card-img">{/* <img src="..." alt=""> */}</div>
        <div className="card-content">
          <h5 className="card-title">Card title</h5>
          <p className="card-price">100$</p>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam et sit cupiditate aliquam
            ut rem maxime perferendis nesciunt, rerum impedit? Reiciendis laboriosam mollitia
            repudiandae placeat! Nihil illo unde debitis enim.
          </p>
          <div className="card-tags">
            <span>Lorem</span>
            <span>Ipsum</span>
            <span>Dolor</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
