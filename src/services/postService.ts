import type { Post } from "@/types";

export const getPosts = async (): Promise<Post[]> => {
    const response = await fetch(import.meta.env.VITE_API_URL + "/posts");
    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }
    return response.json();
}

export const getPostById = async (id: number): Promise<Post> => {
    const response = await fetch(import.meta.env.VITE_API_URL +"/posts/" + id);
    if(!response.ok){
        throw new Error("Failed to fetch post!");
    }
    return response.json();
}