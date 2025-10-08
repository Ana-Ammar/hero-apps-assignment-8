import { NavLink, useNavigate } from "react-router";
import errorImg from "../assets/error-404.png"
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const ErrorBoundary = () => {
    let navigate = useNavigate();
    
    return (
        <div className="flex flex-col">
        <Navbar></Navbar>
        
        <div className="flex-1 mx-auto mt-10">
        <img src={errorImg}></img>
        </div>
         <h1 className="text-[#001931] font-semibold text-5xl text-center mt-8 mb-4">Oops, Page Not Found</h1>
        <h2 className="text-center text-[#627382] mb-4">The page you are looking for is not available.</h2>
        <button onClick={() => navigate(-1)} className="btn btn-sm md:btn-md bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white w-fit mx-auto mb-10">Go Back!</button>
        <Footer></Footer>
       </div>
    );
};

export default ErrorBoundary;