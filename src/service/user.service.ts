import { env } from "@/env";
import { cookies } from "next/headers";
// service layer to interact with user-related API endpoints
// get and fetch handle easily


const AUTH_URL = env.AUTH_URL

export const userService = {
  getSession: async () => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${AUTH_URL}/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });

      // if (res) {
      //   console.log("fetched buafljalfajslfjaslfjals ...", res.headers);
      // }

      const session = await res.json();

      return { data: session, error: null };
    } catch (error) {
      console.error("Error fetching session:", error);

      return { data: null, error: "Failed to fetch session" };
    }
  },
};

// ! important installaion:
// npm i @t3-oss/env-nextjs
// for env type safety and validation
// then create src/env.ts file
// then import env where needed
