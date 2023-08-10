import Link from "next/link";
import Image from 'next/image';
import logo from '../../../public/resources/Logo.svg';
import home from '../../../public/resources/home.svg';
import envolope from '../../../public/resources/envolope.svg';
import phone from '../../../public/resources/phone.svg';

export default function Navbar() {

  return (
    <nav className="bg-slate-800">
        
        <div className="bg-[#ffffff] h-[120px] w-full flex flex-row justify-around items-center">
            <div><Image src={logo} alt="Logo" /></div>

            <div className="flex flex-row items-center">
                <div className="pr-5"><Image src={home} alt="home" /></div>
                <div className="flex flex-col">
                    <div className="text-[#FECE01] text-[18px]">Address</div>
                    <div className="text-[18px]">Example England</div>
                </div>
            </div>

            <div className="flex flex-row items-center">
                <div className="pr-5"><Image src={envolope} alt="email" /></div>
                <div className="flex flex-col">
                    <div className="text-[#FECE01] text-[18px]">Email Us</div>
                    <div className="text-[18px]">example@booking.com</div>
                </div>
            </div>

            <div className="flex">
                <div><Image src={phone} alt="phone" /></div>
            </div>
        </div>
        <div className="bg-[#1C2B39] h-[70px] w-full flex flex-row justify-start items-center px-10">
            <div className="px-6 text-[14px] text-[#ffffff] hover:text-[#FECE01]">
                <Link href='/'><p>HOME</p></Link>
            </div>
            <div className="px-6 text-[14px] text-[#ffffff] hover:text-[#FECE01]">
                <Link href='/posts'><p>POSTS</p></Link>
            </div>
        </div>
    </nav>
  )
}
