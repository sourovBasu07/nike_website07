import { reviews } from "@/constants";
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-bold font-palanquin text-center text-4xl">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text max-w-lg m-auto mt-4 text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="flex max-lg:flex-col justify-evenly items-center flex-1 gap-14 mt-24">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};
export default CustomerReviews;
