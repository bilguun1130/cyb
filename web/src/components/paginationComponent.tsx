import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationComponent({
  length,
  page,
}: {
  length: number;
  page: number;
}) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={page <= 1}
            tabIndex={page <= 1 ? -1 : undefined}
            className={page <= 1 ? "pointer-events-none opacity-50" : undefined}
            href={`http://localhost:3000/?page=${page - 1}`}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            aria-current={true}
            href={`http://localhost:3000/?page=${page}"`}
            isActive
          >
            {page}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            aria-disabled={page * 6 >= length - 1}
            tabIndex={page * 6 >= length - 1 ? -1 : undefined}
            className={
              page * 6 >= length - 1
                ? "pointer-events-none opacity-50"
                : undefined
            }
            href={`http://localhost:3000/?page=${page + 1}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
