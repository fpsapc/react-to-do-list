import { NavLink, Outlet } from 'react-router-dom';

const About = () => {
  const about = 'About developer';
  return (
    <>
      <h1>About page.</h1>
      <div className="about">
        <ul className="about_list">
          <li>
            <NavLink to="about-app">About app</NavLink>
          </li>
          <li>
            <NavLink to="about-developer">{about}</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
export default About;
