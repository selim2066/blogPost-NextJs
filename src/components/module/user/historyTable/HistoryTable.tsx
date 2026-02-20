import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BlogPost } from "@/types";

export default function HistoryTable({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="border border-amber-200 rounded-md mx-10">
      <Table className="w-[70%] mx-auto my-10">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100 text-xl">
            <TableHead className="text-black font-bold">Title</TableHead>
            <TableHead className="text-black font-bold">Tags</TableHead>
            <TableHead className="text-black font-bold">Views</TableHead>
            <TableHead className="text-black font-bold">Featured</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              
               <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {post.tags && post.tags.length > 0 ? (
                      post.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                          {tag}
                        </Badge>
                      ))
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        No tags
                      </span>
                    )}
                  </div>
                </TableCell>
              <TableCell>{post.views}</TableCell>
              <TableCell>
                {post.isFeatured ? <Badge variant="outline">Featured</Badge> : <Badge variant="destructive">Not Featured</Badge>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
