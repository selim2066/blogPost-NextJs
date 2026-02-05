import { env } from "@/env";

const API_URL =env.API_URL;

export const blogService = {
  getBlogs: async () => {
    try {
      const res = await fetch(`${API_URL}/post`)
      const data = await res.json()
      return {postData:data, error:null}
      
    } catch (error) {
      return { data: null, error: { message: "Error fetching blogs", details: error } }
    }
  }
}