import Image from "next/image";

type ShoeCardProps = {
  bigShoeImg: any;
  imgUrl: {
    thumbnail: any;
    bigShoe: any;
  };
  changeBigShoeImage: (img: any) => void;
};

const ShoeCard = ({
  bigShoeImg,
  imgUrl,
  changeBigShoeImage,
}: ShoeCardProps) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgUrl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } max-sm:flex-1 cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={imgUrl.thumbnail}
          alt="shoe collection"
          width={128}
          height={128}
          className="object-contain"
        />
      </div>
    </div>
  );
};
export default ShoeCard;
