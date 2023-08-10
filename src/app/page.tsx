'use client'

import homeImg from '../../public/resources/homeimg.png'
import Image from 'next/image';
import HomeImage from '../../public/resources/homeimg2.svg';
import BookingImage from '../../public/resources/bookingImage.svg';
import BookImage from '../../public/resources/bookimg.svg';
import deal1 from '../../public/resources/deal1.svg';
import deal2 from '../../public/resources/deal2.svg';
import deal3 from '../../public/resources/deal3.svg';
import Dash from '../../public/resources/pseudo.svg';
import Dollar from '../../public/resources/dollar.svg';
import Headphone from '../../public/resources/headphone.svg';
import Home2 from '../../public/resources/home2.svg';
import Calender from '../../public/resources/calendar.svg';
import ShopTab from '../../public/resources/shoptab.svg';
import Shoplist from '../../public/resources/shoplist.svg';
import glass from '../../public/resources/glass.svg';
import plane from '../../public/resources/plane.svg';
import hospital from '../../public/resources/hospital.svg';
import beaches from '../../public/resources/beach.svg';
import wallet from '../../public/resources/wallet.svg';
import camera from '../../public/resources/camera.svg';

import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/userSlice";
import { AppDispatch } from "@/store/store";

export default function Home() {

  const userRef = useRef(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
      if (userRef.current === false) {
        dispatch(fetchUsers());
      }
  
      return () => {
        userRef.current = true;
      };
    }, []);

  return (
    <main className=''>

  {/* MainPart */}
    <div>

      <div className='absolute bg-opacity-75 w-full flex flex-row justify-center items-center'>
          <div className='w-[600px] space-y-5'>
              <div className='text-[#EAEAEA] text-[18px]'>Free Changes for Life.</div>
              <div className='text-[54px] text-[#FFFFFF]'>Hand-Made Website For Your Bussiness</div>
              <div>
                <button className='bg-[#FECE01] text-[#FFFFFF] text-[16px] w-[180px] h-[54px]'>Book Call</button>
              </div>
          </div>
          <div>
              <Image src={HomeImage} alt='HomeImage' />
          </div>
      </div>

      <div className='bg-slate-800 bg-opacity-75'>
      <Image className='w-full h-[880px] -z-10 relative' src={homeImg} alt='backgroundImage' />
      </div>
    </div>

    {/* Features Tab */}
    <div className='h-[190px] w-full bg-[#FFFFFF] flex items-center justify-around border-[1px] border-[#0000001A]'>
      <div className='flex flex-row justify-around items-center'>

        <div className='flex flex-row items-center space-x-2'>
          <div><Image src={Dollar} alt='Dollar' /></div>
          <div className='space-y-1 w-[230px]'>
            <div className='text-[#444444] text-[18px] font-bold'>Best Price Guaranteed</div>
            <div className='text-[#777777] text-[15px]'>A more recently with desktop softy like aldus page maker.</div>
          </div>
        </div>
        <div className='flex flex-row items-center space-x-2'>
          <div><Image src={Headphone} alt='Headphone' /></div>
          <div className='space-y-1 w-[230px]'>
            <div className='text-[#444444] text-[18px] font-bold'>24/7 Customer Care</div>
            <div className='text-[#777777] text-[15px]'>A more recently with desktop softy like aldus page maker.</div>
          </div>
        </div>
        <div className='flex flex-row items-center space-x-2'>
          <div><Image src={Home2} alt='Home' /></div>
          <div className='space-y-1 w-[230px]'>
            <div className='text-[#444444] text-[18px] font-bold'>Home Pickups</div>
            <div className='text-[#777777] text-[15px]'>A more recently with desktop softy like aldus page maker.</div>
          </div>
        </div>
        <div className='flex flex-row items-center space-x-2'>
          <div><Image src={Calender} alt='Calender' /></div>
          <div className='space-y-1 w-[230px]'>
            <div className='text-[#444444] text-[18px] font-bold'>Easy Bookings</div>
            <div className='text-[#777777] text-[15px]'>A more recently with desktop softy like aldus page maker.</div>
          </div>
        </div>

      </div>
    </div>

    {/* Shop Tab */}
    <div className='w-full h-[740px] bg-[#FFFFFF] flex flex-row justify-around items-center'>
    
    <div className='w-[680px] space-y-4'>
        <div className='text-[16px] text-[#212529] font-bold'>Like always. Like never before.</div>
        <div className='text-[28px] text-[#212529] font-bold'>Bespoke Software & Digital Transformation.</div>
        <div>By automating processes and tasks, businesses can reduce costs and improve productivity.
              Additionally, custom software tailored to the specific needs of a business can give them a
              significant advantage over their competitors.
        </div>
        <div>
        Our software development agency has a team of experienced and skilled professionalswho can 
        create custom software solutions for your business. We understand the unique requirements
        of each business and create tailor-made solutions that can help them achieve their goals.
        </div>
        <div>
         <button className='bg-[#FECE01] text-[#FFFFFF] text-[16px] w-[180px] h-[54px]'>Get A Quote</button>
        </div>
        <div>
            <Image src={Shoplist} alt='shoplist' />
        </div>
    </div>

    <div><Image src={ShopTab} alt='Img' /></div>

    </div>

    {/* Booking Deals */}
    <div>
      <div className='z-10 absolute w-full h-full flex flex-col justify-center items-center space-y-8'>

      <div className='text-[40px] text-[#FFFFFF] font-bold'>Deals On Booking</div>
      <div><Image src={Dash} alt='dash' /></div>
      <div className='text-[15px] text-[#D7D7D7] w-[600px] text-center'>
        Lorem Ipsum passages, and more recently with desktop publishing software and applications like
        aldus pageMaker which has different variations.
      </div>
      <div className='flex flex-row space-x-5'>
        <Image src={deal1} alt='Deals' />
        <Image src={deal2} alt='Deals' />
        <Image src={deal3} alt='Deals' />
      </div>

      </div>
      <div className='bg-slate-800 bg-opacity-75'>
      <Image className='w-full -z-10 relative' src={BookingImage} alt='Booking' />
      </div>
    </div>

    {/* Our Services */}
    <div className='h-[1200px] w-full bg-[#FFFFFF] flex flex-col items-center justify-center space-y-8'>

    <div className='text-[40px] text-[#444444]'>Our Services</div>
    <div><Image src={Dash} alt='Img' /></div>
    <div className='text-[15px] text-[#777777] w-[400px] text-center'>
        Lorem Ipsum passages, and more recently with desktop publishing software
        like aldus pageMaker including versions.
    </div>
    <div className='grid grid-cols-3 gap-5'>

          <div className='w-[440px] h-[380px] space-y-5'>
               <div className='h-[120px] w-full bg-[#EEEEEE] flex flex-row justify-center items-center'><Image src={glass} alt='img' /></div>
                <div className='flex flex-col items-center justify-center space-y-3'>
                  <div className='text-[#444444] text-[22px]'>Restaurants</div>
                  <div className='text-[#777777] text-[15px] w-[240px] text-center'>A more recently with desktop softy like aldus page maker.</div>
                </div>
          </div>

          <div className='w-[440px] h-[380px] space-y-5'>
               <div className='h-[120px] w-full bg-[#EEEEEE] flex flex-row justify-center items-center'><Image src={plane} alt='img' /></div>
                <div className='flex flex-col items-center justify-center space-y-3'>
                  <div className='text-[#444444] text-[22px]'>Airports</div>
                  <div className='text-[#777777] text-[15px] w-[240px] text-center'>A more recently with desktop softy like aldus page maker.</div>
                </div>
          </div>

          <div className='w-[440px] h-[380px] space-y-5'>
               <div className='h-[120px] w-full bg-[#EEEEEE] flex flex-row justify-center items-center'><Image src={hospital} alt='img' /></div>
                <div className='flex flex-col items-center justify-center space-y-3'>
                  <div className='text-[#444444] text-[22px]'>Hospitals</div>
                  <div className='text-[#777777] text-[15px] w-[240px] text-center'>A more recently with desktop softy like aldus page maker.</div>
                </div>
          </div>

          <div className='w-[440px] h-[380px] space-y-5'>
               <div className='h-[120px] w-full bg-[#EEEEEE] flex flex-row justify-center items-center'><Image src={beaches} alt='img' /></div>
                <div className='flex flex-col items-center justify-center space-y-3'>
                  <div className='text-[#444444] text-[22px]'>Beaches</div>
                  <div className='text-[#777777] text-[15px] w-[240px] text-center'>A more recently with desktop softy like aldus page maker.</div>
                </div>
          </div>

          <div className='w-[440px] h-[380px] space-y-5'>
               <div className='h-[120px] w-full bg-[#EEEEEE] flex flex-row justify-center items-center'><Image src={wallet} alt='img' /></div>
                <div className='flex flex-col items-center justify-center space-y-3'>
                  <div className='text-[#444444] text-[22px]'>Shopping Malls</div>
                  <div className='text-[#777777] text-[15px] w-[240px] text-center'>A more recently with desktop softy like aldus page maker.</div>
                </div>
          </div>

          <div className='w-[440px] h-[380px] space-y-5'>
               <div className='h-[120px] w-full bg-[#EEEEEE] flex flex-row justify-center items-center'><Image src={camera} alt='img' /></div>
                <div className='flex flex-col items-center justify-center space-y-3'>
                  <div className='text-[#444444] text-[22px]'>Wedding Parties</div>
                  <div className='text-[#777777] text-[15px] w-[240px] text-center'>A more recently with desktop softy like aldus page maker.</div>
                </div>
          </div>
         
    </div>

    </div>

    {/* Book Now Tab */}
    <div>
    <div  className='z-10 absolute pt-10 w-full flex flex-row justify-around items-center'>
      <div className='text-[38px] text-[#FFFFFF]'>Incredible Destinations at Incredible Deals</div>
      <div><button className='bg-[#FECE01] text-black text-[16px] w-[180px] h-[54px]'>Book Call</button></div>
    </div>
       <div className='bg-slate-800 bg-opacity-75'>
       <Image className='-z-10 relative' src={BookImage} alt='Img' />
       </div>
    </div>

    </main>
  )
}