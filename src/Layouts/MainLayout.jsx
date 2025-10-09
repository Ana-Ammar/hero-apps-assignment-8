import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LoadingSpiner from "../Pages/LoadingSpiner";


const MainLayout = () => {
    const Navigation = useNavigation()

    return (
       <div className="flex flex-col min-h-screen bg-[#F5F5F5]">

        <Navbar></Navbar>
        <div className="flex-1">
            {
                Navigation.state === 'loading' ? <LoadingSpiner></LoadingSpiner>
                : <Outlet></Outlet>
            }
             
        </div>
        <Footer></Footer>
       </div>
       
    );
};

export default MainLayout;