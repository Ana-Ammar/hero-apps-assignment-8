import { NavLink } from "react-router";
import useAppData from "../../Hooks/useAppData";
import TrendingAppShow from "./TrendingAppShow";

const TrendingApp = () => {
  const [appData] = useAppData();
  const trendingApp = appData.filter((app) => app.ratingAvg > 4.6);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 mt-10 md:mt-16 lg:mt-20 mb-10 md:mb-20">
      <h1 className="text-[#001931] font-bold text-3xl md:text-5xl text-center">
        Trending Apps
      </h1>
      <h4 className="text-[#627382] md:text-xl text-center mt-4 mb-10">
        Explore All Trending Apps on the Market developed by us
      </h4>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {trendingApp.map((app) => (
          <TrendingAppShow key={app.id} app={app}></TrendingAppShow>
        ))}
      </div>

      <div className="flex justify-center mt-7 md:mt-10 lg:mt-14">
        <NavLink
          to="/apps"
          className="btn btn-sm md:btn-md bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
        >
          Show All
        </NavLink>
      </div>
    </div>
  );
};

export default TrendingApp;
