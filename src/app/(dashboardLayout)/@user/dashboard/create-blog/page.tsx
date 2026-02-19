import CreateBlogPageServer from "@/components/module/user/createBlog/createBlogPageServer";
import CreateBlogFormClient from "@/components/module/user/createBlog/createBlogFormClient";
import { blogService } from "@/service/blog.service";
import { BlogPost } from "@/types";

export default async function CreateBlogPage() {
  const { postData } = await blogService.getBlogPosts({},{cache: "no-store"});
  return (
    <div>
      {/* <CreateBlogPageServer /> */}
      <CreateBlogFormClient/>
      {/* {postData.data.map((itme: BlogPost) => (
        <div key={itme.id}>
          <h2>{itme.title}</h2>
        </div>
      ))} */}
    </div>
  );
}
