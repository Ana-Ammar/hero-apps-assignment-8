import { HashLoader } from "react-spinners";

const LoadingSpiner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 mt-10 md:mt-16 lg:mt-20 mb-10 md:mb-20 flex justify-center items-center max-h-screen">

      <HashLoader color="#632EE3" loading size={120} speedMultiplier={1} />
      
    </div>
  );
};

export default LoadingSpiner;
