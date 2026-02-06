import { env } from "@/env";

// Base API URL loaded from environment variables
// This allows changing backend URL without touching code
const API_URL = env.API_URL;

/*
  Next.js Fetch Caching Strategies:

  - No config + no cache option       => SSG (Static Site Generation)
  - { cache: "no-store" }            => SSR (Server-Side Rendering)
  - { next: { revalidate: number } } => ISR (Incremental Static Regeneration)

  This service is designed to support all three dynamically.
*/

// Shape of optional query parameters for fetching blogs
// These are used to build URL query string (?isFeatured=true&search=react)
interface GetBlogsParams {
  isFeatured?: boolean; // Filter for featured blogs
  search?: string;      // Search keyword for blogs
}

// Options to control Next.js fetch behavior
// This allows caller to decide caching & revalidation strategy
interface ServiceOptions {
  cache?: RequestCache; // e.g. "no-store", "force-cache"
  revalidate?: number;  // ISR revalidation time in seconds
}

export const blogService = {
  /**
   * Fetch blogs from backend API with optional filters and caching options
   *
   * @param params   Optional query filters (isFeatured, search)
   * @param options  Optional Next.js fetch configuration (cache, revalidate)
   */
  getBlogs: async (params?: GetBlogsParams, options?: ServiceOptions) => {
    try {
      // Create a URL object for safe and structured URL manipulation
      // This avoids manual string concatenation mistakes
      const url = new URL(`${API_URL}/post`);

      // Dynamically append query parameters if provided
      // Converts params object into key=value pairs
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          // Only add meaningful values to query string
          // Prevents URLs like ?search=&isFeatured=
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key, String(value));
          }
        });
      }

      // Build fetch configuration object dynamically
      // This allows same function to support SSG, SSR, and ISR
      const config: RequestInit = {};

      // If revalidate is provided, enable ISR
      // Next.js will cache and revalidate after X seconds
      if (options?.revalidate !== undefined) {
        config.next = { revalidate: options.revalidate };
      }

      // If cache option is provided, control fetch caching behavior
      // Example: cache: "no-store" => always fresh data (SSR)
      if (options?.cache) {
        config.cache = options.cache;
      }

      // Log final URL for debugging and verification
      console.log(url.toString());

      // Perform the actual HTTP request
      const res = await fetch(url.toString(), config);

      // Parse JSON response from backend
      const data = await res.json();

      // Standardized success response
      return { postData: data, error: null };

    } catch (error) {
      // Centralized error handling for service layer
      // Makes UI error handling consistent
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
