import { CardPropsType } from '../types/types';

export const Card = function Card(props: CardPropsType) {
  const { title, img, price, text, tags } = props;
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
};
