import { useState, useEffect, useRef } from "react";
import { useOnClickOutside } from "./useOnClickOutside";
import { NavLink } from "react-router-dom";

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    document.title = `Current state value: ${dropdown}`;
    
    useEffect(() => {
        const handler = (event) => {
          if (dropdown && ref.current && !ref.current.contains(event.target)) {
            setDropdown(false);
          }
        };
        document.addEventListener("mousedown", handler);
      }, [dropdown]);

    const ref = useRef();
    console.log(ref);

    useOnClickOutside(ref, dropdown, () => setDropdown(false));

  return (
    <nav>
      <ul>
      {links.map((link) => {
        return (
          <li key={link.text}>
           <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        );
      })}
      </ul>
    </nav>
  );
};
export default Navbar;
