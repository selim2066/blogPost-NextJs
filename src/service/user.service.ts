import { cookies } from "next/headers";

export const userService = {
  getSession: async () => {
    try {
      const cookieStore = await cookies();
      const res = await fetch("http://localhost:3000/api/auth/session", {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });
      const session = await res.json();

      return { data: session, error: null };
    } catch (error) {
      console.error("Error fetching session:", error);

      return { data: null, error: "Failed to fetch session" };
    }
  },
};
