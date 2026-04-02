'use server';

import { BlogData, blogService } from "@/service/blog.service";
import { updateTag } from "next/cache";

export const getBlogs = async () => {
return await blogService.getBlogPosts()
}

export const createBlogPost = async (blogData: BlogData) => {
  const res= await blogService.createBlogPost(blogData);
  updateTag("blog-posts");
  // / * updateTag cannot use in client component, so we need to call this function in server component and then call the server component in client component to update the tag and revalidate the cache after creating a new blog post.*/
  return res;
}

 // Revalidate all pages tagged with "blog-posts" to reflect the new blog post, this is important for server component to reflect the changes without refreshing the page, and it can never be used in client component because it is a server function, and it can only be used in server component or server action, and it will not work in client component because it is a server function.