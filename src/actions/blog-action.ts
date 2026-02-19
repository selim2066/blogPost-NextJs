'use server';

import { BlogData, blogService } from "@/service/blog.service";
import { updateTag } from "next/cache";

export const getBlogs = async () => {
return await blogService.getBlogPosts()
}

export const createBlogPost = async (blogData: BlogData) => {
  const res= await blogService.createBlogPost(blogData);
  updateTag("blog-posts"); // Revalidate all pages tagged with "blog-posts" to reflect the new blog post
  return res;
}