import BlogCard from "@/components/module/homepage/BlogCard";
import { blogService } from "@/service/blog.service";

import { BlogPost } from "@/types";
export default async function BlogsPage() {
  // const featuredPostsPromise = blogService.getBlogPosts({ isFeatured: false });
  const posts = await blogService.getBlogPosts();
  return (
    <div className="my-10">
      <div  className="max-w-7xl mx-auto px-4" >
        <h2 className="text-2xl font-bold mb-6">All Posts</h2>
        <div className="grid grid-cols-3 gap-5">
          {posts?.error?.message ? (
            <p className="text-red-500">{posts?.error?.message}</p>
          ) : null}
          {posts?.postData?.data?.map((post: BlogPost) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
