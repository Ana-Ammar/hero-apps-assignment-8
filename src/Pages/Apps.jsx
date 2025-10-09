import { useEffect, useState } from "react";
import AppShow from "../Pages/TrendingApp.jsx/AppShow";

import { NavLink, useLoaderData, useNavigation } from "react-router";
import SearchLoading from "./TrendingApp.jsx/SearchLoading";

const Apps = () => {
  const appData = useLoaderData();
  const Navigation = useNavigation();
  const [searchedData, setSeachedData] = useState(appData);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    const spinnerShowInSearch = setTimeout(() => {
      if (search === "") {
        setLoading(false);
        return setSeachedData(appData);
      }
      const convertedSearch = search.trim().toLocaleLowerCase();
      const searchedValue =
        convertedSearch &&
        appData.filter((app) =>
          app.title.toLocaleLowerCase().includes(convertedSearch)
        );
      setSeachedData(searchedValue);
      setLoading(false);
    }, 200);

    return () => clearTimeout(spinnerShowInSearch);
  }, [search, appData]);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 mt-10 md:mt-16 lg:mt-20 mb-10 md:mb-20">
      <h1 className="text-[#001931] font-bold text-3xl md:text-5xl text-center">
        Our All Applications
      </h1>
      <h4 className="text-[#627382] md:text-xl text-center mt-4 mb-10">
        Explore All Apps on the Market developed by us. We code for Millions
      </h4>

      <div className="md:flex justify-between items-center">
        <h4 className="text-center text-[#001931] font-bold text-2xl mb-4 md:mb-0">
          ({searchedData.length}) Apps Found
        </h4>

        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search"
          />
        </label>
      </div>

      {loading && Navigation.state === "idle" ? (
        <SearchLoading></SearchLoading>
      ) : (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {searchedData.length === 0 ? (
            <div className="col-span-4 flex flex-col justify-center items-center gap-6">
              <h1 className=" text-gray-500 font-bold md:text-2xl mt-6">
                No app Found
              </h1>
              <NavLink
                to="/apps"
                className="btn btn-sm md:btn-md bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white">
                Show Apps
              </NavLink>
            </div>
          ) : (
            searchedData.map((app) => (
              <AppShow key={app.id} app={app}></AppShow>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Apps;
