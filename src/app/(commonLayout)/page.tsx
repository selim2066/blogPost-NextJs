import { Button } from "@/components/ui/button";
import { blogService } from "@/service/blog.service";
//import { authClient } from "@/lib/auth-client";
import { userService } from "@/service/user.service";

export default async function Home() {

  // const session = await authClient.getSession();
  // console.log("this is session from home and its server side session",session)

  const {data, error}= await userService.getSession();
  console.log("home(commonlayout page.tsx: data of session and error::n)......",data,error)

  const {postData}= await blogService.getBlogs()
  console.log("post data.......",postData)
  return (
    <div>
      <Button>Click MSR</Button>
    </div>
  );
}
