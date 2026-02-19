"use client";
import { createBlogPost } from "@/actions/blog-action";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as z from "zod";
//import { zodValidator } from "@tanstack/zod-form-adapter";

const blogSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters long")
    .max(200, "Title must be at most 200 characters long"),

  content: z.string().min(10, "Content must be at least 10 characters long"),
  isFeatured: z.boolean(),
  tags: z.string(),
});

export default function CreateBlogFormClient() {
  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
      isFeatured: false,
      tags: "",
    },
    validators: {
      onSubmit: blogSchema,
    },
    onSubmit: async ({ value }) => {
      console.log("clicked", value);
      const toastId = toast.loading("Creating blog post...");
      const blogData = {
      ...value,
       
      tags: value.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== ""),
    };
    console.log(blogData)
    try {
      const res = await createBlogPost(blogData);
      console.log(res)
      if(res.error){
        toast.error(res.error.message, { id: toastId });
        return;
      }
      toast.success("Blog created successfully!", { id: toastId });

      
    } catch (error) {
      toast.error("Failed to create blog post. Please try again.");
    }
    },
  });

  return (
    <Card className="max-w-2xl mx-auto my-5">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Create Your Blog</CardTitle>
        <CardDescription className="text-center"> You can write your Blog here</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="blog-post"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit(e);
          }}
        >
          <FieldGroup>
            {/* TITLE */}
                 <form.Field
              name="title"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Title</FieldLabel>
                    <Input
                      type="text"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Blog Title"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            {/* CONTENT */}
            <form.Field
              name="content"
              children={(field) =>{
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                   <Field>
                  <FieldLabel htmlFor={field.name}>Content</FieldLabel>
                 <Textarea
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Write your blog"
                       className="border border-gray-300 rounded-md px-3 py-2 w-full mt-4 min-h-40"
                    />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
                )
              }}
            />

            {/* TAGS */}
            <form.Field
              name="tags"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Tags</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full" type="submit" form="blog-post">
          Post
        </Button>
      </CardFooter>
    </Card>
  );
}
