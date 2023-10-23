"use client";

import { shoes, statistics } from "@/constants";
import Button from "./Button";
import { arrowRight } from "@/assets/icons";
import Image, { StaticImageData } from "next/image";
import { bigShoe1 } from "@/assets/images";
import { useState } from "react";
import ShoeCard from "./ShoeCard";

const Hero = () => {
  const [bigShowImg, setBigShowImg] = useState<StaticImageData>(bigShoe1);

  return (
    <section
      className="w-full min-h-screen max-container flex flex-col xl:flex-row justify-center gap-10"
      id="home"
    >
      <div className="relative flex flex-col justify-center items-start w-full xl:w-2/5 max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="relative xl:bg-white xl:whitespace-nowrap pr-10 z-10">
            The New Arrival
          </span>
          <br />
          <span className="inline-block text-coral-red mt-3">Nike</span> Shoes
        </h1>
        <p className="text-lg font-montserrat text-slate-gray leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop now" iconUrl={arrowRight} />

        <div className="w-full flex justify-start items-start flex-wrap gap-16 mt-20">
          {statistics.map((stat, index) => (
            <div className="" key={index}>
              <p className="font-bold text-4xl font-palanquin">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative xl:min-h-screen flex justify-center items-center flex-1 bg-primary max-xl:py-40">
        <Image
          src={bigShowImg}
          alt="shoes collection"
          width={610}
          height={502}
          className="relative object-contain z-10"
        />

        <div className="flex absolute gap-4 sm:gap-6 -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div className="" key={index}>
              <ShoeCard
                bigShoeImg={bigShowImg}
                imgUrl={image}
                changeBigShoeImage={(shoe) => setBigShowImg(shoe)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
