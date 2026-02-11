"use client";

import { getBlogs } from "@/actions/blog-action";
import { useEffect, useState } from "react";

export default function AboutPage() {
  //await new Promise((resolve) => setTimeout(resolve, 3000));
  const [data, setData] = useState<string | null>(null);
  console.log(data)

  useEffect(() => {
    (async()=>{
      const {postData}= await getBlogs()
      setData(postData)
    })()
  }, []);
  return (
    <div>AboutPage</div>
  );
}