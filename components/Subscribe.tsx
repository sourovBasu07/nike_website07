import Button from "./Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex max-lg:flex-col justify-between items-center gap-10"
      id="about-us"
    >
      <h3 className="font-bold font-palanquin lg:max-w-md text-4xl leading-[68px]">
        Sign up for <span className="text-coral-red"> Updates </span> &
        Newsletter
      </h3>

      <div className="w-full lg:max-w-[40%] flex max-sm:flex-col items-center gap-5 p-3 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />

        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign up" fullWidth />
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
