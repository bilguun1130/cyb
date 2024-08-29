import NewsSection from "@/components/section/news";
import { SwipeCarousel } from "@/components/swipeCarousel";
import { dummyNews } from "@/lib/dummyNews";
import { redirect } from "next/navigation";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const length = dummyNews.length;
  const page = searchParams["page"]
    ? parseInt(searchParams["page"] as string)
    : 1;
  page < 1 || (page * 6 >= dummyNews.length + 5 && redirect("/"));
  return (
    <main className="flex flex-col gap-5 w-full container max-w-screen-2xl justify-center mt-5">
      <SwipeCarousel />
      <NewsSection page={page} />
    </main>
  );
}
