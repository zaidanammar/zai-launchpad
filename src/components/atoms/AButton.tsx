import React from "react";

type Props = {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
};

const AButton = ({ title, onClick, disabled, type = "button" }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full py-2 flex justify-center items-center bg-primary px-6 hover:bg-pink-100 hover:bg-opacity-75 rounded-lg shadow-sm text-textPrimary font-sans font-medium"
    >
      {title}
    </button>
  );
};

export default AButton;
