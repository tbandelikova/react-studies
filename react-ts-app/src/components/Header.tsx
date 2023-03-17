import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="navigate">
      <ul className="navigate-list">
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
