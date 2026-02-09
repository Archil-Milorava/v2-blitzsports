'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import OptimizedImage from '@/components/ui/OptimizedImage';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { article } from '@/drizzle/schema';
import { MoreHorizontalIcon } from 'lucide-react';

type ArticleTableProps = {
  articles: {
    data: (typeof article.$inferSelect)[];
    metadata: {
      currentPage: number;
      totalPages: number;
      hasNextPage: boolean;
      hasPrevPage: boolean;
    };
  };
};

export function ArticleTable({ articles }: ArticleTableProps) {
  const { data, metadata } = articles;

  return (
    <Table>
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
        {data.map((item) => (
          <TableRow key={item.id} className="cursor-pointer">
            <TableCell className="flex items-center gap-2 font-medium">
              <div className="h-12 w-12 overflow-hidden rounded-md ">
                {' '}
                <OptimizedImage src={item.coverImage} alt={item.title} />
              </div>
              {item.title}
            </TableCell>
            <TableCell>{item.badge}</TableCell>
            <TableCell>
              {new Date(item.createdAt).toLocaleDateString('ka-GE')}
            </TableCell>
            <TableCell>
              {' '}
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
        ))}
      </TableBody>
    </Table>
  );
}
