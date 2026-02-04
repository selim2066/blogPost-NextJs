import { cookies } from "next/headers";

export const userService = {
  getSession: async () => {
    try {
      const cookieStore = await cookies();
      const res = await fetch("http://localhost:3001/api/auth/get-session", {
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
