import { NavLink, useRouteError } from "react-router";
import errorImg from "../assets/error-404.png"
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const ErrorBoundary = () => {
    const error = useRouteError();
    
    return (
        <div className="flex flex-col">
        <Navbar></Navbar>
        
        <div className="flex-1 mx-auto mt-10">
        <img src={errorImg}></img>
        </div>
         <h1 className="text-[#001931] font-semibold text-5xl text-center mt-8 mb-4">Oops, Page {error.statusText}</h1>
        <h2 className="text-center text-[#627382] mb-4">{error.data}</h2>
        <NavLink to="/" className="btn btn-sm md:btn-md bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white w-fit mx-auto mb-10">Go Back!</NavLink>
        <Footer></Footer>
       </div>
    );
};

export default ErrorBoundary;