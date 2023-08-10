'use client'

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePost } from '../../../../store/userSlice';
import { useRouter } from 'next/navigation';

type Props = {
  params: {
    id: number;
  };
};

export default function Update({ params: { id } }: Props) {
  const dispatch = useDispatch();
  const router = useRouter();

  // State for the updated post
  
  const [updatedTitle, setUpdatedTitle] = useState<string>('');
  const [updatedBody, setUpdatedBody] = useState<string>('');
  const [finalPost, setFinalPost] = useState({title: 'hello', body: 'hello'});

  const handleUpdatePost = (id: number, upData: { title: string; body: string }) => {
    dispatch(updatePost({ id, upData }))
    // Redirect to the posts page
    router.push('/posts');
  };


  return (
    <div className='p-24 bg-slate-200 flex flex-col items-center justify-center space-y-3'>
      <div className='flex flex-col items-start justify-center space-y-3'>
        <p>Title</p>
        <input
          className='w-[400px] h-[50px] border-transparent rounded-md'
          type='text'
          placeholder='Enter Post Title'
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
        <p>Description</p>
        <textarea
          rows={14}
          cols={100}
          className='border-transparent rounded-md'
          placeholder='Enter Post Description'
          value={updatedBody}
          onChange={(e) => setUpdatedBody(e.target.value)}>
        </textarea>
        <div>
          <button
            className='w-[100px] h-[30px] bg-[yellow] text-black border-transparent rounded-md'
            onClick={() => handleUpdatePost(1, finalPost)}>
            Update Post
          </button>
        </div>
      </div>
    </div>
  );
}



