import { products } from "@/constants";
import PopularProductCard from "./PopularProductCard";

const PopularProducts = () => {
  return (
    <section className="max-container max-sm:mt-12" id="products">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-bold font-palanquin text-4xl">
          Our <span className="text-coral-red"> Popular </span> Products
        </h2>
        <p className="text-slate-gray font-montserrat mt-2 lg:max-w-lg">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-16 gap-14 sm:gap-14">
        {products.map((product, index) => (
          <PopularProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};
export default PopularProducts;
