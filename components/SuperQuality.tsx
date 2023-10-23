import Image from "next/image";
import Button from "./Button";
import { shoe8 } from "@/assets/images";

const SuperQuality = () => {
  return (
    <section
      className="max-container w-full flex max-lg:flex-col justify-between items-center gap-10"
      id="about-us"
    >
      <div className="flex flex-col flex-1">
        <h2 className="capitalize font-palanquin font-bold text-4xl lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span> Shoes
        </h2>
        <p className="info-text lg:max-w-lg mt-4">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text lg:max-w-lg mt-6">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex">
        <Image
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};
export default SuperQuality;
