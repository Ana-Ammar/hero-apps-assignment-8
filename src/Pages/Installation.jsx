import useAppData from "../Hooks/useAppData";
import { getDataFromLs } from "../Utilities/Utility";

const Installation = () => {
//   const [appData] = useAppData();

const installedApp = getDataFromLs()
console.log(installedApp)



  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 mt-10 md:mt-16 lg:mt-20 mb-10 md:mb-20">
      <h1 className="text-[#001931] font-bold text-3xl md:text-5xl text-center">
        Your Installed Apps
      </h1>
      <h4 className="text-[#627382] md:text-xl text-center mt-4 mb-10">
        Explore All Trending Apps on the Market developed by us
      </h4>

       <div className="md:flex justify-between items-center">
        <h4 className="text-center text-[#001931] font-bold text-2xl mb-4 md:mb-0">({installedApp.length}) Apps Found</h4>

      </div>
    </div>
  );
};

export default Installation;
