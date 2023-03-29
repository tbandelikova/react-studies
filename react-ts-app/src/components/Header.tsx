import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Header: React.FC = function Header() {
  const location = useLocation().pathname;
  const [routeName, setRoureName] = useState('HOME');

  useEffect(() => {
    const path = location == '/' ? 'HOME' : location.slice(1).toUpperCase();
    setRoureName(path);
  }, [location]);

  return (
    <header className="navigate">
      <h1>RS School - React. {routeName}</h1>
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
};
