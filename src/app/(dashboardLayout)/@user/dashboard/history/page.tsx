import HistoryTable from "@/components/module/user/historyTable/HistoryTable";
import PaginationControls from "@/components/ui/pagination-control";
import { blogService } from "@/service/blog.service";

export default async function HistoryPage({searchParams}:{searchParams: Promise<{page: string}>}) {
  const { page } = await searchParams;
const response= await blogService.getBlogPosts({page});

const posts = response.postData?.data || [];
  const pagination = response.postData?.pagination || {
    limit: 5,
    page: 1,
    totalPosts: 0,
    totalPages: 1,
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 ml-10 mt-1.5">History Page</h1>

      <HistoryTable posts={posts} />
      <div className="mt-4">
        <PaginationControls meta={pagination} />
      </div>

    </div>
  );
}