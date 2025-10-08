import { useLoaderData, useParams } from "react-router";
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import Charts from "./Charts";
import { addItemToLs, getDataFromLs } from "../../Utilities/Utility";
import { useEffect, useState } from "react";

const AppDetails = () => {
  const { id } = useParams();
  const data = useLoaderData() 
  const clickedId = parseInt(id);
  const [btnStatus, setBtnStatus] = useState(true)
    
  const clickedData = data.find((app) => app.id === clickedId);
  const {ratings} = clickedData


//   Handle Install Button

const handleInstallBtn = (installedApp) => {
    addItemToLs(installedApp)
    setBtnStatus(false)
}


useEffect(() => {
    const lsData = getDataFromLs()
    if (lsData.some(d => d.id === clickedId)) {
    setBtnStatus(false)
    }
}, [])



  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 mt-10 md:mt-16 lg:mt-20 mb-10 md:mb-20">
   
        <div>
          <div className="md:flex items-center gap-8">
            <img src={clickedData.image} className="w-[350px] mx-auto"></img>
            <div className="flex-1 mt-6 md:mt-0">
              <h1 className="text-[#001931] font-bold text-2xl md:text-3xl">
                {clickedData.title}
              </h1>
              <h4 className="text-[#627382] text-base md:text-xl mt-2">
                Developed by{" "}
                <span className="clicked-page">{clickedData.companyName}</span>{" "}
              </h4>
              <div className="border-b border-gray-300 my-6 w-full"></div>

              <div className="flex md:gap-10 gap-6">
                <div className="">
                  <img src={download} />
                  <p className="text-[#001931] mt-2 text-sm md:text-base">Downloads</p>
                  <h1 className="text-[#001931] font-extrabold md:text-4xl">
                    {clickedData.downloads}
                  </h1>
                </div>
                <div>
                  <img src={rating} />
                  <p className="text-[#001931] mt-2 text-sm md:text-base">Average Ratings</p>
                  <h1 className="text-[#001931] font-extrabold md:text-4xl">
                    {clickedData.ratingAvg}
                  </h1>
                </div>
                <div>
                  <img src={review} />
                  <p className="text-[#001931] mt-2 text-sm md:text-base">Total Reviews</p>
                  <h1 className="text-[#001931] font-extrabold md:text-4xl">
                    {clickedData.reviews}
                  </h1>
                </div>
              </div>

              <button
              onClick={() => handleInstallBtn(clickedData)} 
              className="btn bg-[#00D390] font-semibold text-white text-base mt-7">
                {btnStatus === true ? `Install Now (${clickedData.size} MB)` : "Installed"}
              </button>
            </div>
          </div>

          <div className="border-b border-gray-300 my-10 w-full"></div>

          {/* Charts */}
          <Charts ratings={ratings}></Charts>

          <div className="border-b border-gray-300 mt-20  w-full"></div>  
        
          <div>
            <h1 className="text-2xl font-semibold text-[#001931] mt-10 mb-6">Description</h1>
            <p className="text-[#627382]">{clickedData.description}</p>
          </div>

        </div>
     
    </div>
  );
};

export default AppDetails;
