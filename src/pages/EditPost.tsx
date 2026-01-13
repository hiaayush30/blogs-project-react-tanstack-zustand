import { updatePostById, getPostById } from '@/services/postService'
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query';

function EditPost() {
    const { id } = useParams<{ id: string }>()
    const postId = Number(id);

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const { data, isLoading, isError } = useQuery({
        queryKey: ["post", postId],
        queryFn: () => getPostById(postId),
        enabled: !isNaN(postId),
    })

    useEffect(()=>{
        // TODO fix the eslint warning (disabled for now)
        if(data){
             // eslint-disable-next-line react-hooks/set-state-in-effect
            setTitle(data.title);
            setBody(data.body);
        }
    },[data])

    const updatePostMutation = useMutation({
        mutationFn: updatePostById,
        onSuccess: () => {
            alert("Post updated");
            // Invalidate both the post list and the specific post detail query
            queryClient.invalidateQueries({ queryKey: ["posts"] });
            queryClient.invalidateQueries({ queryKey: ["post", postId] });
            navigate("/");
        },
        onError: (err) => {
            alert(err);
        }
    })
    const handleSubmit = async () => {
        if (title.trim() || body.trim()) {
            updatePostMutation.mutate({ id: postId, title, body });
        }
    }

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError || isNaN(postId)) {
        return <div> Could not fetch Post</div>
    }
    return (
        <div className='min-h-screen flex flex-col items-center justify-center gap-5 p-4'>
            <h1 className='text-3xl font-bold'>Edit Post</h1>
            <div className='flex items-center gap-3'>
                <label htmlFor='title'>Title:</label>
                <input id='title' className='font-semibold' value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <textarea
                value={body}
                onChange={e => setBody(e.target.value)}
                className='w-full p-2 border rounded'
            />
            <button
                onClick={handleSubmit}
                disabled={updatePostMutation.isPending}
                className='p-1 bg-stone-300 hover:bg-stone-200 border-2 border-stone-800 cursor-pointer rounded-lg'
            >
                {updatePostMutation.isPending ? "Saving..." : "Update Post"}
            </button>
        </div>
    )
}

export default EditPost
