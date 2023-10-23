import Image from "next/image";
import { star } from "@/assets/icons";

type PopularProductCardProps = {
  imgURL: string;
  name: string;
  price: string;
};

const PopularProductCard = ({
  imgURL,
  name,
  price,
}: PopularProductCardProps) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full">
      <Image src={imgURL} alt={name} width={282} height={282} className="" />
      <div className="flex justify-start gap-3 mt-8">
        <Image src={star} alt="rating icon" width={24} height={24} />
        <p className="text-xl font-montserrat text-slate-gray leading-normal">
          (4.5)
        </p>
      </div>

      <h3 className="text-2xl leading-normal font-semibold font-palanquin mt-2">
        {name}
      </h3>
      <p className="font-semibold font-montserrat text-coral-red text-2xl leading-normal mt-2">
        {price}
      </p>
    </div>
  );
};
export default PopularProductCard;
