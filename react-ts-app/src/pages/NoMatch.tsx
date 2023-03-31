import { Link } from 'react-router-dom';
import img from '../assets/404.svg';

export const NoMatch: React.FC = function NoMatch() {
  return (
    <div className="wrapper-no-match">
      <img src={img} alt="404" />
      <Link to="/" className="btn no-match">
        Go Home
      </Link>
    </div>
  );
};
