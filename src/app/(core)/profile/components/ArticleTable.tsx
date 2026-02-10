'use client';
import PaginationClientSide from '@/components/pagination/PaginationClientSide';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import OptimizedImage from '@/components/ui/OptimizedImage';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MoreHorizontalIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getArticlesByUserId } from '../actions';
import { InferSelectModel } from 'drizzle-orm';
import { article } from '@/drizzle/schema';
import { Spinner } from '@/components/ui/spinner';

type Article = InferSelectModel<typeof article>;

export interface PaginatedArticles {
  data: Article[];
  metadata: {
    currentPage: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

export function ArticleTable() {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState<PaginatedArticles | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const articlesData = await getArticlesByUserId(page);
        setArticles(articlesData);
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [page]);

  // Handle the initial null state before the first fetch
  const data = articles?.data || [];
  const metadata = articles?.metadata;

  return (
    <Table className="rounded-md border">
      <TableHeader>
        <TableRow>
          <TableHead>სტატია</TableHead>
          <TableHead>Badge</TableHead>
          <TableHead>შექმნის დრო</TableHead>
          <TableHead>ჩასწორების დრო</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {loading ? (
          /* Spinner Row */
          <TableRow>
            <TableCell colSpan={5} className="h-80 text-center">
              <div className="flex w-full items-center justify-center">
                <Spinner />
              </div>
            </TableCell>
          </TableRow>
        ) : data.length > 0 ? (
          /* Data Rows */
          data.map((item) => (
            <TableRow key={item.id} className="cursor-pointer">
              <TableCell className="flex items-center gap-2 font-medium">
                <div className="h-12 w-12 overflow-hidden rounded-md">
                  <OptimizedImage src={item.coverImage} alt={item.title} />
                </div>
                {item.title}
              </TableCell>
              <TableCell>{item.badge}</TableCell>
              <TableCell>
                {new Date(item.createdAt).toLocaleDateString('ka-GE')}
              </TableCell>
              <TableCell>
                {new Date(item.updatedAt).toLocaleDateString('ka-GE')}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                      <MoreHorizontalIcon />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))
        ) : (
          /* Empty State Row */
          <TableRow>
            <TableCell
              colSpan={5}
              className="text-muted-foreground h-24 text-center"
            >
              No articles found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>

      {metadata && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>
              <PaginationClientSide
                currentPage={metadata.currentPage}
                totalPages={metadata.totalPages}
                onPageChange={setPage}
                hasNextPage={metadata.hasNextPage}
                hasPrevPage={metadata.hasPrevPage}
              />
            </TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  );
}
