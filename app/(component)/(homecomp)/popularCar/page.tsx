'use client'
import images from '@/public/assets'
import Image from 'next/image'
import { Popularcar } from '@/public/assets'
import Link from 'next/link'
import { useState, useEffect } from 'react'
export default function popularCar() {
    const savedId = (id: string) => [
        localStorage.setItem('Car_Detail', id),
    ]

    const [Liked, setLiked] = useState(false)

    const toggleLike = () => {
        setLiked(!Liked)
    }
    return (
        <main>
            <div className="p-4">
                <h1 className="text-[#90A3BF] my-3 ">Popular Car</h1>
           
           <div className='grid grid-cols-4 space-x-6 gap-y-6'>
                {Popularcar.slice(4).map((item, i) => {
                    return (
                        <div className='bg-[#FFFFFF]  px-4 py-3 rounded-md shadow-xl'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-[#1A202C] text-[18px] font-bold'>{item.name}</p>
                                    <p className="text-xs text-[#90A3BF] font-semibold">{item.type}</p>
                                </div>
                                <Image src={item.HeartImg} alt="Heart" 
                                onClick={toggleLike}
                                  style={{
                                    filter: Liked ? 'brightness(0) saturate(100%) invert(34%) sepia(96%) saturate(5037%) hue-rotate(-5deg) brightness(97%) contrast(120%)' : 'none',
                                    // color: Liked ? 'blue' : 'transparent',
                                  }}
                                />
                            </div>
                            <Image src={item.img} alt='carImage' className='my-6 hover:translate-y-[-10px] transition-all duration-500 mx-auto ' />

                            <div className='grid grid-cols-3 mt-3'>
                                <div className='flex space-x-3 items-center text-[#90A3BF] font-semibold'>
                                    <Image src={item.Gas_logo} alt='Gas Logo' />
                                    <p>{item.Liter}</p>
                                </div>
                                <div className='flex space-x-3 items-center text-[#90A3BF] font-semibold'>
                                    <Image src={item.Brand_logo} alt='Gas Logo' />
                                    <p>{item.auto}</p>
                                </div>
                                <div className='flex space-x-3 items-center text-[#90A3BF] font-semibold' >
                                    <Image src={item.Brand_logo} alt='Gas Logo' />
                                    <p>{item.Nop}</p>
                                </div>
                            </div>

                            <div className='flex justify-between px-4 items-center mt-5'>
                                <div>
                                    <div className='flex space-x-1 items-center'>
                                        <p className='text-[20px] font-bold'>{item.Slashedprice}</p>
                                        <p className='text-sm text-[#90A3BF] font-semibold'>{item.Dat}</p>
                                    </div>
                                    <p className=' line-through text-[#90A3BF] font-semibold text-sm'>{item.OriginalPrice}</p>
                                </div>
                            <Link href={`/popularCarDetails`} className='bg-[#3563E9] text-white py-3 px-4 rounded-md text-center w-[40%] text-[17px]' onClick={() => savedId(item?.id)}>Rent now</Link>
                            </div>
                        </div>
                    )
                })}
                </div>

            </div>
            <div className="p-4">
                <h1 className="text-[#90A3BF] mb-6 ">Recommended Car</h1>
           
           <div className='grid grid-cols-4 space-x-7 gap-y-7 '>
                {Popularcar.map((item, i) => {
                    return (
                        <div className='bg-[#FFFFFF] px-4 py-3 rounded-md shadow-xl'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-[#1A202C] text-[18px] font-bold'>{item.name}</p>
                                    <p className="text-xs text-[#90A3BF] font-semibold">{item.type}</p>
                                </div>
                                <Image src={item.HeartImg} alt="Heart" 
                                onClick={toggleLike}
                                  style={{
                                    filter: Liked ? 'brightness(0) saturate(100%) invert(34%) sepia(96%) saturate(5037%) hue-rotate(-5deg) brightness(97%) contrast(120%)' : 'none',
                                    // color: Liked ? 'blue' : 'transparent',
                                  }}
                                />
                            </div>
                            <Image src={item.img} alt='carImage' className='my-6 hover:translate-y-[-10px] transition-all duration-500' onClick={() => savedId(item?.id)}/>

                            <div className='grid grid-cols-3 mt-3'>
                                <div className='flex space-x-3 items-center text-[#90A3BF] font-semibold'>
                                    <Image src={item.Gas_logo} alt='Gas Logo' />
                                    <p>{item.Liter}</p>
                                </div>
                                <div className='flex space-x-3 items-center text-[#90A3BF] font-semibold'>
                                    <Image src={item.Brand_logo} alt='Gas Logo' />
                                    <p>{item.auto}</p>
                                </div>
                                <div className='flex space-x-3 items-center text-[#90A3BF] font-semibold' >
                                    <Image src={item.Brand_logo} alt='Gas Logo' />
                                    <p>{item.Nop}</p>
                                </div>
                            </div>

                            <div className='flex justify-between px-4 items-center mt-5'>
                                <div>
                                    <div className='flex items-center'>
                                        <p className='text-[20px] font-bold'>{item.Slashedprice}</p>
                                        <p className='text-sm text-[#90A3BF] font-semibold'>{item.Dat}</p>
                                    </div>
                                    <p className=' line-through text-[#90A3BF] font-semibold text-sm'>{item.OriginalPrice}</p>
                                </div>
                            <Link href={`/popularCarDetails`} className='bg-[#3563E9] text-white py-3 px-4 rounded-md text-center w-[40%]' onClick={() => savedId(item?.id)}>Rent now</Link>
                            </div>
                        </div>
                    )
                })}
                </div>
                <div className='bg-[#3563E9] text-white py-3 px-4 rounded-md mx-auto text-center flex justify-center items-center mt-10 mb-7 shadow-lg w-[10%]'>
                     <Link href={'allcars'} className=''>Show more car</Link>
                </div>
             
            </div>
        </main>
    )
}