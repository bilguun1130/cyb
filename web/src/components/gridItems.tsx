"use client";

import React from "react";

import { cn } from "../lib/utils";
import places from "./places";
import PlaceListItem from "./place-list-item";
import { dummyNews } from "@/lib/dummyNews";
import { PaginationComponent } from "./paginationComponent";

export default function GridItems({
  className,
  page,
}: {
  className?: string;
  page: number;
}) {
  const numberOfItemsPerPage = 6;
  const startIndex = (page - 1) * numberOfItemsPerPage;
  const endIndex = startIndex + numberOfItemsPerPage;

  // Slice the array to get only the items for the current page
  const paginatedNews = dummyNews.slice(startIndex, endIndex);
  return (
    <div className="flex flex-col gap-y-5">
      <div
        className={cn(
          "my-auto grid max-w-7xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center w-full mx-auto",
          className
        )}
      >
        {paginatedNews.map((news, index) => (
          <PlaceListItem
            key={index}
            title={news.title}
            description={news.description}
            image={news.image}
            date={news.date}
            category={news.category}
            id={news.id}
          />
        ))}
      </div>
      <PaginationComponent page={page} length={dummyNews.length} />
    </div>
  );
}
