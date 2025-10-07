import { NavLink } from "react-router";
import download from "../../assets/icon-downloads.png"
import star from "../../assets/icon-ratings.png"
import notion from "../../assets/Notion_app_logo.png"

const TrendingApp = () => {
    return (
    <div className='max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 mt-10 md:mt-16 lg:mt-20 mb-10 md:mb-20'>
            <h1 className='text-[#001931] font-bold text-3xl md:text-5xl text-center'>Trending Apps</h1>
            <h4 className='text-[#627382] md:text-xl text-center mt-4 mb-10'>Explore All Trending Apps on the Market developed by us</h4>


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="p-4 bg-white rounded-sm">
                <img className="rounded-lg" src={notion}/>
                <h1 className="text-[#001931] my-4">Forest: Focus for Productivity</h1>
                <div className="flex justify-between">
                    <span className="badge text-[#00D390] text-base py-4 bg-[#F1F5E8]"><img src={download} className="w-4"/> 9M</span>
                    <span className="badge text-[#FF8811] text-base py-4 bg-[#FFF0E1]"><img src={star} className="w-4"/>5</span>
                </div>
            </div>
        </div>

        
        <div className="flex justify-center mt-7 md:mt-10 lg:mt-14">
            <NavLink to="/apps" className="btn btn-sm md:btn-md bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"> 
        Show All</NavLink>
        </div>
    </div>
    );
};

export default TrendingApp;