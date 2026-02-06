import BlogCard from "@/components/module/homepage/BlogCard";
import { Button } from "@/components/ui/button";
import { blogService } from "@/service/blog.service";
//import { authClient } from "@/lib/auth-client";
import { userService } from "@/service/user.service";
import { BlogPost } from "@/types/blogpost";

export default async function Home() {

  // const session = await authClient.getSession();
  // console.log("this is session from home and its server side session",session)

  const {data, error}= await userService.getSession();
  console.log("home(commonlayout page.tsx: data of session and error::n)......",data,error)

  const {postData}= await blogService.getBlogs()
  console.log("post data.......",postData)
  return (
    <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:px-15">
      {/* <Button>Click MSR</Button> */}

      {postData?.data?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
