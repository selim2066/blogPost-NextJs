import CreateBlogFormServer from "@/components/module/user/createBlog/createBlogFormServer";
import CreateBlogFormClient from "@/components/module/user/createBlog/createBlogFormClient";
import { blogService } from "@/service/blog.service";
import { BlogPost } from "@/types";

export default async function CreateBlogPage() {
  const { postData } = await blogService.getBlogPosts({},{cache: "no-store"});
  return (
    <div>
      {/* <CreateBlogFormServer /> */}
      <CreateBlogFormClient/>
      {/* {postData.data.map((itme: BlogPost) => (
        <div key={itme.id}>
          <h2>{itme.title}</h2>
        </div>
      ))} */}
    </div>
  );
}
