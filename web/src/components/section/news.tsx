import React from "react";
import HeadingText from "../headingTexts";
import GridItems from "../gridItems";
import { PaginationComponent } from "../paginationComponent";

const NewsSection = ({ page }: { page: number }) => {
  return (
    <div className="flex flex-col mb-5">
      <HeadingText text="Мэдээ" />
      <GridItems page={page} />
    </div>
  );
};

export default NewsSection;
