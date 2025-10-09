import { Link, NavLink, useLocation } from "react-router";
import './Navbar.css'
import { AiFillGithub } from "react-icons/ai";
import logo from "../assets/logo.png"

const Navbar = () => {
  const location = useLocation()

  const links = (
    <>
      <Link
        to="/"
        className={` ${
          location.pathname === "/" ?
          "clicked-page clicked-page-border"
         : 'font-medium'}`}>
        Home
      </Link>


      <Link to="/apps"
      className={` ${
          location.pathname === "/apps" ?
          "clicked-page clicked-page-border"
         : 'font-medium'}`}>
        Apps
      </Link>


      <Link to='/intallation'
      className={` ${
          location.pathname === "/intallation" ?
          "clicked-page clicked-page-border"
         : 'font-medium'}`}
      >Installation</Link>
    </>

  );
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="clicked-page md:text-xl md:font-bold flex items-center gap-1">
        <img src={logo} className="w-7 md:w-10"></img>
          HERO.IO
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-6 items-center">
          {links}
        </ul>
      </div>
      <div className="navbar-end flex md:gap-4 gap-2">
        <a href="https://github.com/Ana-Ammar" target="_blank" className="btn btn-sm md:btn-md bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"> 
        <AiFillGithub />
        Contribute</a>
      </div>
    </div>
  );
};

export default Navbar;