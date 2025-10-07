import playstore from "../assets/playstore.png";
import applestore from "../assets/appstore.png";
import banner from "../assets/hero.png";

const Banner = () => {
  return (
      <section className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 md:mt-12 mt-6">

          <div className="">
            <h1 className="md:text-7xl/tight text-4xl font-bold text-center">
              We Build <br /> <span className="clicked-page">Productive</span>{" "}
              Apps
            </h1>
            <p className="py-6 text-[#627382] hidden md:flex justify-center text-center">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting.
              <br /> Our goal is to turn your ideas into digital experiences
              that truly make an impact.
            </p>

            <p className="py-6 text-[#627382] md:hidden">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>

            <div className="flex items-center justify-center">
              <a
                href="https://play.google.com/store/apps?hl=en"
                target="_blank"
                className="btn btn-sm md:btn-md md:text-base mr-4 border-2"
              >
                {" "}
                <img src={playstore} className="w-5 md:w-7" /> Google Play
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                className="btn btn-sm md:btn-md md:text-base border-2"
              >
                <img src={applestore} className="w-5 md:w-7" /> App Store
              </a>
            </div>
          </div>
      

        <div className="mt-10">
          <img src={banner} className="mx-auto" />
        </div>

      </section>
  );
};

export default Banner;
