import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { env } from "@/env";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

const API_URL = env.API_URL;

export default function createBlogPageServer() {
  const createBlog = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const tags = formData.get("tags") as string;

    const blogData = {
      title,
      content,
      isFeatured: true,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== ""),
    };

    const cookieStore = await cookies();
    const res = await fetch(`${API_URL}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStore.toString(),
      },
      body: JSON.stringify(blogData),
    });
    const post = await res.json();
    //toast.success("Blog created successfully!")

    if (res.ok) {
      revalidateTag("blog-posts", "max"); // Revalidate all pages tagged with "blog-posts" to reflect the new blog post
    }
  };
  return (
    <Card className="w-2xl mx-auto my-5">
      <CardHeader>
        <CardTitle>Create Your Blog</CardTitle>
        <CardDescription> You can write your Blog here</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="blog-form" action={createBlog}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="title">Title</FieldLabel>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Write Your Blog Title"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="content">Content</FieldLabel>

              <Textarea
                id="content"
                name="content"
                placeholder="Write your blog content here..."
                className="border border-gray-300 rounded-md px-3 py-2 w-full mt-4 h-60"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="tags">Tags</FieldLabel>
              <input
                type="text"
                id="tags"
                name="tags"
                placeholder="Write Your Blog Tags (comma separated)"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button form="blog-form" type="submit" className="w-full">
          Post
        </Button>
      </CardFooter>
    </Card>
  );
}
