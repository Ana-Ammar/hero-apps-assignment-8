import { PuffLoader } from "react-spinners";

const SearchLoading = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 mt-10 md:mt-16 lg:mt-20 mb-10 md:mb-20 flex items-center justify-center max-h-screen">
      <PuffLoader color="#632EE3" size={60} speedMultiplier={1} />
    </div>
  );
};

export default SearchLoading;
