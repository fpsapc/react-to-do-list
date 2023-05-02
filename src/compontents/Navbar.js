import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useOnClickOutside } from './useOnClickOutside';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  document.title = `Current state value: ${dropdown}`;

  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
  }, [dropdown]);

  useOnClickOutside(ref, dropdown, () => setDropdown(false));

  return (
    <nav>
      <ul>
        {links.map((link) => {
          const links = link;
          return (
            <li key={links.text}>
              <NavLink to={links.path}>{links.text}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
