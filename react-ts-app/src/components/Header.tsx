import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="wrapper">
      <ul className="navigate">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </div>
  );
}
