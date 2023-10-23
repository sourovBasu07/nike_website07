import Image from "next/image";
import { offer } from "@/assets/images";
import Button from "./Button";
import { arrowRight } from "@/assets/icons";

const SpecialOffer = () => {
  return (
    <section className="max-container flex max-xl:flex-col-reverse justify-between items-center gap-10">
      <div className="flex-1">
        <Image
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="font-bold font-palanquin text-4xl">
          <span className="text-coral-red">Special </span> Offer
        </h2>
        <p className="info-text mt-4">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-6">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};
export default SpecialOffer;
