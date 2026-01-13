import React from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { deletePostById, getPosts } from '@/services/postService'
import type { Post } from '@/types'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
    const { data, isLoading, isError } = useQuery<Post[]>({
        queryKey: ["posts"],
        queryFn: getPosts
    })

    const queryClient = useQueryClient();
    const deletePostMutation = useMutation({
        mutationFn: deletePostById,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] })
            alert("post deleted");
        }
    })

    const handleDelete = async (postId: number) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            deletePostMutation.mutate(postId);
        }
    }

    return (
        <div className='container mx-auto p-4 grid grid-cols-3'>
            <div className='col-start-2 pt-5'>
                <h1 className='text-3xl font-bold mb-4'>Welcome to the blog App!</h1>
                <div className='flex items-center justify-between'>
                    <p className='text-2xl font-semibold my-3'>Blog Posts</p>
                    <Link to={"/posts/new"} className='bg-stone-300 p-1 rounded-lg border-2 hover:bg-stone-200 border-stone-800'>Create Post</Link>
                </div>
                {
                    isLoading ? (
                        <div>
                            Loading...
                        </div>
                    ) : isError ? (
                        <div>
                            Error fetching Posts
                        </div>
                    ) : (
                        <div className='border-2 border-stone-800 p-4 rounded-lg'>
                            {
                                data?.map(post => (
                                    <div key={post.id} className='relative bg-stone-300 p-2 my-2 rounded-lg'>
                                        <button
                                            onClick={() => handleDelete(post.id)}
                                            className="absolute top-2 right-2 border-2 p-1 rounded-lg font-semibold"
                                            disabled={deletePostMutation.isPending}
                                        >
                                            Delete
                                        </button>
                                        <h2 className='text-xl font-semibold'>
                                            <Link to={`/posts/${post.id}`}>{post.title}</Link>
                                        </h2>
                                        <p className='mt-2'>{post.body}</p>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default HomePage
