//import BlogCard from "@/components/modules/homepage/BlogCard";
import BlogCard from "@/components/module/homepage/BlogCard";
import { blogService } from "@/service/blog.service";
//import { blogService } from "@/services/blog.service";

import { BlogPost } from "@/types";
import Image from "next/image";

export default async function Home() {
  const featuredPostsPromise = blogService.getBlogPosts({ isFeatured: false });
  const postsPromise = blogService.getBlogPosts(
    { limit: "6" },
    { revalidate: 10 },
  );

  const [featuredPosts, posts] = await Promise.all([
    featuredPostsPromise,
    postsPromise,
  ]);

  // console.time("Sequential");

  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  // console.timeEnd("Sequential");

  // console.time("Parallel");

  // const promise1 = new Promise((resolve) => setTimeout(resolve, 1000));
  // const promise2 = new Promise((resolve) => setTimeout(resolve, 2000));

  // await Promise.all([promise1, promise2]);

  // console.timeEnd("Parallel");
  return (
    <div className="max-w-7xl mx-auto px-4 mb-10">
      <div className="mb-12 mt-8 h-[calc(100vh-80px)] flex flex-col justify-center">
        <div className="relative w-full h-96 mb-6">
          {/* <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=100"
            alt="Hero"
            className="w-full h-full object-cover rounded-lg"
          /> */}

          {/* <Image
            src={coffee}
            fill
            alt="Hero"
            className="object-cover rounded-md"
          /> */}
          <Image
            src="https://images.unsplash.com/photo-1564501676255-20610ef48161?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            priority
            alt="Hero"
            className="object-cover rounded-md"
          />
        </div>
        <h1 className={"text-5xl font-bold text-center mb-4"}>
          Welcome to MSR Blog
        </h1>
      </div>
      {/* featured post */}
      {featuredPosts?.postData?.data &&
        featuredPosts.postData.data.length > 0 && (
          <div className="mb-12">
            <h2 className={"text-2xl font-bold mb-6"}>Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.postData.data.slice(0, 2).map((post: BlogPost) => (
                <div
                  key={post.id}
                  className="border rounded-lg overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                    <p className="text-gray-600 line-clamp-2">{post.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      {/* all posts */}
      <div>
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
