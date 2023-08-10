import getPost from "../../../../library/getPost";
import Image from "next/image"; 
import postImage from '../../../../public/resources/postimg.svg';
import postImage2 from '../../../../public/resources/postimg2.svg';
import Dollar from '../../../../public/resources/dollar2.svg';
import homeIcon from '../../../../public/resources/homeicon.svg';
import Headphone from '../../../../public/resources/headphone2.svg';
import Calender from '../../../../public/resources/calendar2.svg';
import PostIcon from '../../../../public/resources/posticon.svg';
import Link from "next/link";

type Props = {
    params: {
        id: number
    }
}

export default async function post({params: {id}}: Props) {

    const post: Promise<Post> = getPost(id);
    const renderedPost = await post;
    
  return (
    <>
    <main>

    {/* Header */}
    <div>
        <div className="bg-slate-800 z-10 absolute h-[375px] bg-opacity-75 w-full">
            <div className="flex flex-col items-center space-y-5 pt-10">
                <div className="text-[50px] text-[#FFFFFF]">POSTS</div>
                <div className="text-[20px] text-[#FFFFFF]">Home » Posts</div>
            </div>
        </div>
        <Image className="-z-10 relative" src={postImage} alt="img" />
    </div>

    {/* Posts */}
    <div className="flex flex-row justify-center space-x-5 items-center h-[1000px] bg-slate-200">
                <div className="flex flex-col items-center space-y-3 h-[580px] w-[300px] bg-white pt-6 border-transparent rounded-md">
                    <div>David John</div>
                    <div>john@example.com</div>
                    <div className="h-[40px] w-[240px] bg-[#FECE01] text-white flex flex-row justify-start items-center pl-3 space-x-3"><Image src={PostIcon} alt="img" /><p>Posts</p></div>
                </div>
                <div className="w-[880px] h-[580px] p-4 bg-[white] border-transparent rounded-md">
                <div className="flex flex-row justify-start space-x-2 px-5">
                    <Link href='/posts'>👈</Link>
                    <h1 className="text-2xl font-bold mb-4">Posts</h1>
                </div>
                  <div className="w-[400px] space-y-5">
                    <p className="font-bold text-[25px] text-black">{renderedPost.title}</p>
                    <p className="text-[15px] text-black">{renderedPost.body}</p>
                  </div>
                </div>
        </div>
    
    {/* Post Features */}
        <div>
            <div className="bg-slate-800 z-10 absolute h-[255px] bg-opacity-75 w-full flex items-center justify-center">
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
            <Image className="-z-10 relative" src={postImage2} alt="img" />
        </div>


    </main>
  </>
  )
}
