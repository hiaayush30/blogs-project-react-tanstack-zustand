import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { createPost } from '@/services/postService';

function CreatePost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const createPostMutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] }) // Invalidate the posts query to refetch the list
            navigate("/") // Redirect to the homepage
        },
        onError: (err) => {
            alert(err.message)
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createPostMutation.mutate({ title, body })
    }
    return (
        <div className='container mx-auto min-h-screen p-4 flex flex-col items-center justify-center gap-5 bg-stone-300'>
            <div className='bg-stone-100 p-4 rounded-lg min-w-2xl text-center'>
                <h1 className='text-3xl font-semibold mb-5'>Create new Post</h1>
                <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-3'>
                    <input value={title} onChange={e => setTitle(e.target.value)} className='outline-1 rounded-lg p-1' placeholder='Blog Title' type='text' />
                    <textarea value={body} onChange={e => setBody(e.target.value)} className='outline-1 p-1 rounded-lg' placeholder='Blog goes here...' />
                    <button
                        className='bg-stone-300 p-1 rounded-lg hover:bg-stone-200 cursor-pointer'
                        type='submit'>
                        {createPostMutation.isPending ? "Creating..." : "Create"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost
