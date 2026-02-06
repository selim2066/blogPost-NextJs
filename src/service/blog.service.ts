import { env } from "@/env";

const API_URL = env.API_URL;

//* No Dynamic and No { cache: no-store } : SSG -> Static Page
//* { cache: no-store } : SSR -> Dynamic Page
//* next: { revalidate: 10 } : ISR -> Mix between static and dynamic

interface GetBlogsParams {
  isFeatured?: boolean;
  search?: string;
}
interface ServiceOptions {
  cache?: RequestCache;
  revalidate?: number;
}

export const blogService = {
  getBlogs: async (params?: GetBlogsParams, options?: ServiceOptions) => {
    try {
      const url = new URL(`${API_URL}/post`);
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key, String(value));
          }
        });
      }

      // for config revalidate in fetch
      const config: RequestInit = {};

      if (options?.revalidate !== undefined) {
        config.next = { revalidate: options.revalidate };
      }
      if (options?.cache) {
        config.cache = options.cache;
      }
      console.log(url.toString());
      const res = await fetch(url.toString(), config);

      const data = await res.json();
      return { postData: data, error: null };
    } catch (error) {
      return {
        data: null,
        error: {
          message: "Error fetching blogs {blog.service.ts}",
          details: error,
        },
      };
    }
  },
};
