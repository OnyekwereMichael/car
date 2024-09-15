'use client';
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import images from "@/public/assets"
import {specialityData} from '@/public/assets'
export default function navbar() {
    const [token, setToken] = useState<boolean | null>(false)
    const [showdropdown, setShowdropdown] = useState(false)

    return (
        <nav className="">
            <main className='bg-white p-3 shadow-lg'>
                <div className='flex items-center justify-between '>
                    <div className="flex items-center space-x-8">
                        <Image src={images.pageLogo} alt="image"></Image>

                        <div className='flex space-x-6 items-center'>
                            <h1 className='cursor-pointer font-semibold   text-[16px] bg-[#3563E9] text-white py-2 px-4 rounded-full'>HOME</h1>
                            <h1 className='cursor-pointer font-semibold text-[16px] text-[#3563E9]'>ALL RIDERS</h1>
                            <h1 className='cursor-pointer font-semibold text-[16px] text-[#3563E9]'>ABOUT</h1>
                            <h1 className='cursor-pointer  font-semiboldtext-[16px] text-[#3563E9]'>CONTACT</h1>
                        </div>
                    </div>

                    <div className="flex items-center space-x-5">
                        <div className="bg-white p-[7px] w-[400px]  flex items-center justify-between   border-[#C3D4E9] border-[1px] border-solid rounded-full smm:w-[200px] ">
                            <div className="flex gap-2">
                                <Image src={images.SearchLogo} alt="" width={20} className="" />
                                <input
                                    type="text"
                                    className="bg-transparent outline-none rounded-xl "
                                    placeholder="Search something here"
                                />
                            </div>
                            <Image src={images.Filter} alt="" width={20} className="" />
                        </div>

                        {token ?
                            <div className='relative'>
                                <div className='flex space-x-5'>
                                    <Image src={images.ProfileIcon} alt='profileIcon' />
                                    <Image src={images.LikeIcon} alt='likeIcon' />
                                    <Image src={images.NotificationIcon} alt='notification' />
                                    <Image src={images.SettingIcon} alt='settingicon' onClick={() => setShowdropdown(!showdropdown)} />
                                </div>

                                {showdropdown ?
                                    <div className='absolute top-[70px] right-0 z-20 bg-[#F8F8F8] py-2 pr-14 pl-3   rounded-md shadow-md' onClick={() => setShowdropdown(false)}>
                                        <p className='cursor-pointer text-[15px] mb-3  hover:white  '><Link href='myprofile'>My profile</Link></p>
                                        <p className='cursor-pointer text-[15px] my-3  hover:white  '><Link href='/myrides'></Link>My Rides</p>
                                        <p className='cursor-pointer text-[15px] mt-3 hover:white  '><Link href='/logout'>Logout</Link></p>
                                    </div> : ''
                                }
                            </div> :
                            <button className='bg-[#3563E9] text-white py-[11px] px-4 rounded-full shadow-md font-medium text-[14px]'>
                                <Link href='/login'>Create Account</Link></button>

                        }
                    </div>

                </div>
            </main>
              
              {/* {specialityData.map((item, index) => (
                  <div key={index}>
                    <Link href={`/myrides ${item.speciality}`}>
                         <Image src={item.image} alt=''></Image>
                     </Link>
                  </div>
              ))} */}

        </nav>
    );
}