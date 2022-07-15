import React from "react";
import ALoading from "./ALoading";

type Props = {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  isLoading?: boolean;
};

const AButton = ({
  title,
  onClick,
  disabled,
  type = "button",
  isLoading,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading ? true : disabled}
      className="w-full py-2 flex justify-center items-center bg-primary px-6 hover:bg-pink-100 hover:bg-opacity-75 rounded-lg shadow-sm text-textPrimary font-sans font-medium"
    >
      {isLoading ? <ALoading /> : title}
    </button>
  );
};

export default AButton;
