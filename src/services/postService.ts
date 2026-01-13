import type { Post } from "@/types";

export const getPosts = async (): Promise<Post[]> => {
    const response = await fetch(import.meta.env.VITE_API_URL + "/posts");
    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }
    return response.json();
}

export const getPostById = async (id: number): Promise<Post> => {
    const response = await fetch(import.meta.env.VITE_API_URL + "/posts/" + id);
    if (!response.ok) {
        throw new Error("Failed to fetch post!");
    }
    return response.json();
}

export const createPost = async (newPost: Omit<Post, 'id'>): Promise<Post> => {
    const response = await fetch(import.meta.env.VITE_API_URL + "/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    })
    if (!response.ok) {
        throw new Error("Could not create new Post!");
    }
    return response.json();
}

export const updatePostById = async (post: Post): Promise<Post> => {
    const response = await fetch(import.meta.env.VITE_API_URL + "/posts/" + post.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    });
    if (!response.ok) {
        throw new Error("could not update post");
    }
    return response.json();
}

export const deletePostById = async (postId: number): Promise<Post> => {
    const response = await fetch(import.meta.env.VITE_API_URL + "/posts/" + postId, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("could not delete post");
    }
    return response.json();
}