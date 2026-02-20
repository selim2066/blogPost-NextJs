import HistoryTable from "@/components/module/user/historyTable/HistoryTable";
import { blogService } from "@/service/blog.service";

export default async function HistoryPage({searchParams}:{searchParams: Promise<{page: string}>}) {
  const { page } = await searchParams;
const response= await blogService.getBlogPosts({page});

const posts = response.postData?.data || [];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">History Page</h1>

      <HistoryTable posts={posts} />

    </div>
  );
}