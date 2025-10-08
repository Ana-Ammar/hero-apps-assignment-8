import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import { HashLoader } from "react-spinners";


const MainLayout = () => {

    return (
       <div className="flex flex-col min-h-screen bg-[#F5F5F5]">

        <Navbar></Navbar>
        <div className="flex-1">
             <Outlet></Outlet>
        </div>
        <Footer></Footer>
       </div>
       
    );
};

export default MainLayout;