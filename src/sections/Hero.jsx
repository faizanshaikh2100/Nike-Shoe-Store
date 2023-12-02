import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { bigShoe2 } from "../assets/images";
import { bigShoe3 } from "../assets/images";

import Button from "../components/Button";
import { statistics, shoes } from "../constants";
import ShoeCard from "../components/ShoeCard";
import BannerShoe from "../components/BannerShoe";

function Hero() {
  const [currentShoe, setCurrentShoe] = useState(bigShoe1);

  function handleShoeChange(bigShoe) {
    setCurrentShoe(bigShoe);
  }

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center items-start min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin md:text-8xl text-[72px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover Stylish Nike arrivals,quality comfort,and innovation for your
          active life.
        </p>
        <Button buttonText={"Shop Now"} iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics?.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* <BannerShoe /> */}
      <div
        className={`relative flex-1 flex flex-col justify-center items-center rounded-xl xl:min-h-screen max-xl:py-40 pt-14 bg-[#97929a]`}
      >
        <video width="100%" autoPlay loop muted playsInline>
          <source
            src="https://res.cloudinary.com/dtvux1tgv/video/upload/v1701516598/walkinstyle%20store/BannerShoe_cfuxg7.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}

export default Hero;
