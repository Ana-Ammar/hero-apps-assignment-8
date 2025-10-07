import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
       <div className="flex flex-col min-h-screen bg-[#F5F5F5]">
        <Navbar></Navbar>
        <div className="flex-">
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
       </div>
       
    );
};

export default MainLayout;