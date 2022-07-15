import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

const ABox = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col items-center py-8 px-6 rounded-md drop-shadow-sm bg-white">
      <h1 className="font-semibold text-3xl">{title}</h1>
      <p className="mt-2">{subtitle}</p>
    </div>
  );
};

export default ABox;
