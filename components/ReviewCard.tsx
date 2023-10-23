import Image from "next/image";
import { star } from "@/assets/icons";

type ReviewCardProps = {
  imgURL: string;
  feedback: string;
  rating: number;
  customerName: string;
};

const ReviewCard = ({
  imgURL,
  feedback,
  rating,
  customerName,
}: ReviewCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={imgURL}
        alt="customer"
        width={120}
        height={120}
        className="object-cover rounded-full"
      />
      <p className="info-text max-w-sm mt-6 text-center">{feedback}</p>
      <div className="flex justify-center items-center gap-3 mt-3">
        <Image
          src={star}
          alt="rating star"
          width={24}
          height={24}
          className="m-0 object-contain"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>

      <h3 className="font-bold font-palanquin text-3xl text-center mt-1">
        {customerName}
      </h3>
    </div>
  );
};
export default ReviewCard;
