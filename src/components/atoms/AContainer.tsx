import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AContainer = ({ children }: Props) => {
  return (
    <section className="bg-white p-6 mt-10 shadow-sm text-sm font-medium">
      {children}
    </section>
  );
};

export default AContainer;
