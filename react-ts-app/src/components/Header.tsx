import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="navigate">
      <h1>RS School - React.</h1>
      <ul className="navigate-list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/forms">Forms</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </header>
  );
}
