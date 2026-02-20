import HistoryTable from "@/components/module/user/historyTable/HistoryTable";
import { blogService } from "@/service/blog.service";

export default async function HistoryPage() {
const response= await blogService.getBlogPosts()

const posts = response.postData?.data || [];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">History Page</h1>

      <HistoryTable />

    </div>
  );
}