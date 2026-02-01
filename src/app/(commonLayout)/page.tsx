import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default async function Home() {
  const session = await authClient.getSession();
  console.log("this is session from home and its server side session",session)
  return (
    <div>
      <Button>Click MSR</Button>
    </div>
  );
}
