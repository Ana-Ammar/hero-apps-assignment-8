import download from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";

const InstalledApp = ({ app, handleUninstallBtn }) => {

  const { image, title, id, downloads, ratingAvg, size } = app;


  return (
    <div className="p-4 bg-white rounded-sm shadow-sm flex items-center gap-4 w-full mb-4">
      <img className="rounded-lg w-20 h-20" src={image} />

      <div className="md:flex justify-between w-full items-center">
        <div className="flex flex-col gap-4">
        <h1 className="text-[#001931] font-medium md:text-xl">{title}</h1>
        <div className="flex items-center gap-4">

          <span className=" text-[#00D390] text-sm md:text-base flex items-center gap-1">
            <img src={download} className="w-4" /> {downloads}
          </span>
          <span className=" text-[#FF8811] text-sm md:text-base flex items-center gap-1">
            <img src={star} className="w-4" />
            {ratingAvg}
          </span>
          <span className="text-[#627382] text-sm md:text-base">{size} MB</span>
        </div>
      </div>

        <button
        onClick={() => handleUninstallBtn(id)}
        className="mt-3 md:mt-0 btn btn-sm md:btn-md bg-[#00D390] font-semibold text-white md:text-base">
        Uninstall
        </button>

      </div>
    </div>
  );
};

export default InstalledApp;
