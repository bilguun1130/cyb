import React from "react";

const HeadingText = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col gap-1 md:gap-5 md:mt-5">
      <h1 className="text-center font-bold text-xl xs:text-2xl sm:text-3xl md:text-4xl text-dark-text">
        {text}
      </h1>
      <div className="w-12 h-1 bg-yellow-400 rounded-full self-center max-w-64"></div>
    </div>
  );
};

export default HeadingText;
