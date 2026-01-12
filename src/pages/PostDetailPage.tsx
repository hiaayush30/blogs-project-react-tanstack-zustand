import type React from "react";
import { useParams } from "react-router-dom";

const PostDetailPage: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    return (
        <div className="container mx-auto p4">
            <h1 className="text-3xl font-bold mb-4">Post Detail Page</h1>
            <p>Displaying details for post id {postId}</p>
            <p>This page will show full post content and comments</p>
        </div>
    )
}

export default PostDetailPage;