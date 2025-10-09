import { NavLink } from "react-router";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-[#001931] text-white p-10">
        <aside className="">
         <NavLink to="/" className=" text-xl font-bold flex items-center gap-1">
        <img src={logo} className="w-10"></img>
          HERO.IO
        </NavLink>
        <p>Providing Best App & Web Development Service since 2002</p>
        </aside>
        
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">App Development</a>
          <a className="link link-hover">Web Development</a>
          <a className="link link-hover">Software Development</a>
          <a className="link link-hover">App Publishing</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
