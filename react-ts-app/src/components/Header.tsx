import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="navigate">
      <h1>RS School - React.</h1>
      <ul className="navigate-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/forms">Forms</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </header>
  );
}
