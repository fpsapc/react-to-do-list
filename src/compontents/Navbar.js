import { useState, useEffect, useRef } from "react";
import { useOnClickOutside } from "./useOnClickOutside";

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
        <li ref={ref}>Home</li>
        <li>About</li>
        <li>
        <button onClick={() => setDropdown(!dropdown)}>
            Services <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
