import { useState } from "react";
import { getDataFromLs, removeItemFromLs } from "../Utilities/Utility";
import InstalledApp from "./InstalledApp";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Installation = () => {
  const data = useLoaderData();
  const [filteredData, setFilteredData] = useState(data);

  const handleUninstallBtn = (clickedId) => {
    Swal.fire({
      icon: "success",
      title: "Uninstalled",
      text: "App removed successfully!",
      footer: `<a href="/apps">If you want to Reinstall Click Here</a>`,
    });
    removeItemFromLs(clickedId);
    setFilteredData(getDataFromLs());
  };

  //   sort by download
  const sortByDownloads = (value) => {
    if (value === "asc-order") {
      const sortedByAsc = [...filteredData].sort((a, b) => {
        let convertA = parseFloat(a.downloads);
        let convertB = parseFloat(b.downloads);

        if (a.downloads.includes("M")) {
          convertA = convertA * 1000000;
        } else if (a.downloads.includes("K")) {
          convertA = convertA * 1000;
        }

        if (b.downloads.includes("M")) {
          convertB = convertB * 1000000;
        } else if (b.downloads.includes("K")) {
          convertB = convertB * 1000;
        }

        return convertB - convertA;
      });
      setFilteredData(sortedByAsc);
    }

    if (value === "dsc-order") {
      const sortedByDsc = [...filteredData].sort((a, b) => {
        let convertA = parseFloat(a.downloads);
        let convertB = parseFloat(b.downloads);

        if (a.downloads.includes("M")) {
          convertA = convertA * 1000000;
        } else if (a.downloads.includes("K")) {
          convertA = convertA * 1000;
        }

        if (b.downloads.includes("M")) {
          convertB = convertB * 1000000;
        } else if (b.downloads.includes("K")) {
          convertB = convertB * 1000;
        }

        return convertA - convertB;
      });
      setFilteredData(sortedByDsc);
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 mt-10 md:mt-16 lg:mt-20 mb-10 md:mb-20">
      <h1 className="text-[#001931] font-bold text-3xl md:text-5xl text-center">
        Your Installed Apps
      </h1>
      <h4 className="text-[#627382] md:text-xl text-center mt-4 mb-10">
        Explore All Trending Apps on the Market developed by us
      </h4>

      <div className="flex justify-between items-center">
        <h4 className=" text-[#001931] font-bold text-xl md:text-2xl md:mb-0">
          ({filteredData.length}) Apps Found
        </h4>

        <select
          defaultValue={"Sort by Downloads"}
          onChange={(e) => sortByDownloads(e.target.value)}
          className="select-sm select w-fit"
        >
          <option disabled={true}>Sort by Downloads</option>
          <option value={"asc-order"}>High-Low</option>
          <option value={"dsc-order"}>Low-High</option>
        </select>
      </div>

      <div className="mt-4">
        {filteredData.map((app) => (
          <InstalledApp
            handleUninstallBtn={handleUninstallBtn}
            key={app.id}
            app={app}
          ></InstalledApp>
        ))}
      </div>
    </div>
  );
};

export default Installation;
