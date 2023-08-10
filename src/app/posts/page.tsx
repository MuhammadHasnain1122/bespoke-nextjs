'use client'

import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { deletePost } from "../../store/userSlice"; 
import { useEffect } from "react";
import Image from "next/image"; 
import type { Metadata } from "next";
import postImage from '../../../public/resources/postimg.svg';
import postImage2 from '../../../public/resources/postimg2.svg';
import Dollar from '../../../public/resources/dollar2.svg';
import homeIcon from '../../../public/resources/homeicon.svg';
import Headphone from '../../../public/resources/headphone2.svg';
import Calender from '../../../public/resources/calendar2.svg';
import PostIcon from '../../../public/resources/posticon.svg';
import Link from "next/link";   


export const metadata: Metadata = {
    title: 'Posts',
    description: 'This is the Posts'
}

export default function posts() {

    const { entities } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>();

      const handleDeletePost = (postId: any) => {
        dispatch(deletePost(postId));
      };

  return (
    <main>

    {/* Header */}
    <div>
        <div className="z-10 absolute w-full">
            <div className="flex flex-col items-center space-y-5 pt-10">
                <div className="text-[50px] text-[#FFFFFF]">POSTS</div>
                <div className="text-[20px] text-[#FFFFFF]">Home » Posts</div>
            </div>
        </div>
        <div className="bg-slate-800 bg-opacity-75">
        <Image className="-z-10 relative" src={postImage} alt="img" />
        </div>
    </div>

    {/* Posts */}
        <div className="flex flex-row justify-center space-x-5 items-center h-[1000px] bg-slate-200">
                <div className="flex flex-col items-center space-y-3 h-[580px] w-[300px] bg-white pt-6 border-transparent rounded-md">
                    <div>David John</div>
                    <div>john@example.com</div>
                    <div className="h-[40px] w-[240px] bg-[#FECE01] text-white flex flex-row justify-start items-center pl-3 space-x-3"><Image src={PostIcon} alt="img" /><p>Posts</p></div>
                </div>
                <div className="w-[880px] h-[580px] p-4 bg-[white] border-transparent rounded-md">
                <div className="flex flex-row justify-between px-5">
                    <h1 className="text-2xl font-bold mb-4">Posts</h1>
                    <input className="h-[30px] w-48" type="text" placeholder="Search" />
                </div>
                <table className="table-auto w-full">
                    <thead>
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2">Description</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                    </thead>
                    
                        {entities.map((post: any) => {
                            return (
                                <>
                                    <tbody>
                                     <tr key={post.id}>
                                             <td className="border px-4 py-2 font-bold">{post.id}</td>
                                             <td className="border px-4 py-2"><Link href={`/posts/${post.id}`}>{(post.title).length <= 8 ? post.title: (post.title).slice(0, 8)}...</Link></td>
                                             <td className="border px-4 py-2">{(post.body).length <= 25 ? post.body: (post.body).slice(0, 25)}....</td>
                                            <td className="border px-4 py-2">
                                                <div className="space-x-2">
                                                    <Link href={`/posts/update/${post.id}`}><button>Update</button></Link>
                                                    <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </>
                            )
                        })}
                </table>
                </div>
        </div>
       
    {/* Post Features */}
        <div>
            <div className="z-10 absolute h-[255px] w-full flex items-center justify-center">
                <div className='flex flex-row justify-around items-center'>
                    <div className='flex flex-row items-center space-x-2'>
                    <div><Image src={Dollar} alt='Dollar' /></div>
                    <div className='space-y-1 w-[230px]'>
                        <div className='text-[#FFFFFF] text-[18px] font-bold'>Best Price Guaranteed</div>
                        <div className='text-[#FFFFFF] text-[15px]'>A more recently with desktop softy like aldus page maker.</div>
                    </div>
                    </div>
                    <div className='flex flex-row items-center space-x-2'>
                    <div><Image src={Headphone} alt='Headphone' /></div>
                    <div className='space-y-1 w-[230px]'>
                        <div className='text-[#FFFFFF] text-[18px] font-bold'>24/7 Customer Care</div>
                        <div className='text-[#FFFFFF] text-[15px]'>A more recently with desktop softy like aldus page maker.</div>
                    </div>
                    </div>
                    <div className='flex flex-row items-center space-x-2'>
                    <div><Image src={homeIcon} alt='Home' /></div>
                    <div className='space-y-1 w-[230px]'>
                        <div className='text-[#FFFFFF] text-[18px] font-bold'>Home Pickups</div>
                        <div className='text-[#FFFFFF] text-[15px]'>A more recently with desktop softy like aldus page maker.</div>
                    </div>
                    </div>
                    <div className='flex flex-row items-center space-x-2'>
                    <div><Image src={Calender} alt='Calender' /></div>
                    <div className='space-y-1 w-[230px]'>
                        <div className='text-[#FFFFFF] text-[18px] font-bold'>Easy Bookings</div>
                        <div className='text-[#FFFFFF] text-[15px]'>A more recently with desktop softy like aldus page maker.</div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-800 bg-opacity-75">
                <Image className="-z-10 relative" src={postImage2} alt="img" />
            </div>
        </div>


    </main>
  )
}
