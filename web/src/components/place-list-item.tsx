"use client";

import React from "react";
import { Image, Skeleton } from "@nextui-org/react";
import { Icon } from "@iconify/react";

import { cn } from "../lib/utils";
import Link from "next/link";
import { Badge } from "./ui/badge";

export type NewsItem = {
  id: number;
  title: string;
  date: string;
  description?: string;
  image: string;
  category: string;
};

export type NewsItemProps = Omit<React.HTMLAttributes<HTMLDivElement>, "id"> & {
  isPopular?: boolean;
  isLoading?: boolean;
  removeWrapper?: boolean;
} & NewsItem;

const NewsListItem = React.forwardRef<HTMLDivElement, NewsItemProps>(
  (
    {
      id,
      title,
      isLoading,
      description,
      category,
      image,
      date,
      removeWrapper,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full flex-none flex-col gap-3",
          {
            "rounded-none bg-background shadow-none": removeWrapper,
          },
          className
        )}
        {...props}
      >
        <Link href={`/news/${id}`}>
          <Image
            isBlurred
            isZoomed
            alt={title}
            className="aspect-square w-full hover:scale-110 h-3/4"
            isLoading={isLoading}
            src={image}
          />

          <div className="mt-1 flex flex-col gap-2 px-1">
            {isLoading ? (
              <div className="my-1 flex flex-col gap-3">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="mt-3 w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="mt-4 w-2/5 rounded-lg">
                  <div className="h-3 w-2/5 rounded-lg bg-default-300" />
                </Skeleton>
              </div>
            ) : (
              <>
                <div className="flex items-start justify-between gap-1">
                  <h3 className="text-small font-semibold text-default-700 h-10 line-clamp-2">
                    {title}
                  </h3>

                  <div className="flex items-center gap-1 text-xs text-default-500 justify-center">
                    <Icon icon="ion:calendar-outline" />
                    <span>2024.08.15</span>
                  </div>
                </div>
                {description ? (
                  <p className="text-small text-default-500  line-clamp-2">
                    {description}
                  </p>
                ) : null}
                <Badge
                  variant={category === "dotood" ? "secondary" : "default"}
                  className="w-fit"
                >
                  {category === "dotood" ? "Дотоод мэдээ" : "Гадаад мэдээ"}
                </Badge>
              </>
            )}
          </div>
        </Link>
      </div>
    );
  }
);

NewsListItem.displayName = "NewsListItem";

export default NewsListItem;
