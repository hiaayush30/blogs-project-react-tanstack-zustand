import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from '@/services/postService'
import type { Post } from '@/types'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
    const { data, isLoading, isError } = useQuery<Post[]>({
        queryKey: ["posts"],
        queryFn: getPosts
    })
    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-3xl font-bold mb-4'>Welcome to the blog App!</h1>
            <p>Blog Posts</p>
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
                                <div key={post.id} className='bg-stone-300 p-2 my-2 rounded-lg'>
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
    )
}

export default HomePage
