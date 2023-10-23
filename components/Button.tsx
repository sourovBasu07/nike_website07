import Image from "next/image";

type ButtonProps = {
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
  label: string;
  iconUrl?: string;
};

const Button = ({
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  label,
  iconUrl,
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 font-montserrat px-7 py-4 border text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
      {iconUrl && (
        <Image
          src={iconUrl}
          alt="arror right icon"
          width={20}
          height={20}
          className="ml-2 rounded-full bg-white"
        />
      )}
    </button>
  );
};
export default Button;
