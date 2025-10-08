import { NavLink } from "react-router";
import download from "../../assets/icon-downloads.png";
import star from "../../assets/icon-ratings.png";

const AppShow = ({ app }) => {
  const { image, id, title, downloads, ratingAvg } = app;
  return (
    <NavLink
      to={`/appdetails/${id}`}
      className="p-4 bg-white rounded-sm flex flex-col justify-between shadow-sm hover:scale-105 transition-transform cursor-pointer"
    >
      <img className="rounded-lg" src={image} />
      <h1 className="text-[#001931] my-4">{title}</h1>
      <div className="flex justify-between">
        <span className="badge text-[#00D390] text-base py-4 bg-[#F1F5E8]">
          <img src={download} className="w-4" /> {downloads}
        </span>
        <span className="badge text-[#FF8811] text-base py-4 bg-[#FFF0E1]">
          <img src={star} className="w-4" />
          {ratingAvg}
        </span>
      </div>
    </NavLink>
  );
};

export default AppShow;
