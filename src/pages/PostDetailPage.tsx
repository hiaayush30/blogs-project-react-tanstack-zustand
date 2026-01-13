import type React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import type { Post } from "@/types";
import { getPostById } from "@/services/postService";

const PostDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const postId = Number(id);

    const { data, isLoading, isError } = useQuery<Post>({
        queryKey: ["post", postId],
        queryFn: () => getPostById(postId),
        enabled: !isNaN(postId)  // Only run the query if postId is a number
    })

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (isError) {
        return <span>Error fetching post</span>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{data?.title}</h1>
            <div className="my-3 flex items-center justify-center gap-3">
                <Link to={"/"} className="border-2 p-1 rounded-lg font-semibold">Back to posts</Link>
                <Link to={"/posts/edit/" + data?.id} className="border-2 p-1 rounded-lg font-semibold">Edit Post</Link>
            </div>
            <p> {data?.body}</p>
        </div>
    )
}

export default PostDetailPage;