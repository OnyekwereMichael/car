'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { Popularcar } from "@/public/assets";
import PopularCa from "../popularCar/page";
import Link from "next/link";
import {FaStar} from 'rec'
export default function popularCarDetail() {
    const CarId = localStorage.getItem('Car_Detail')
    const [selectedUser, setSelectedUser] = useState<CarDetails | null>(null);

    const getCarDetails = () => {
        const result = Popularcar.find(Popularcar => Popularcar?.id === CarId)
        setSelectedUser({ ...result })
    }

    useEffect(() => {
        getCarDetails()
    }, [])

    const savedId = (id: string) => [
        localStorage.setItem('Car_Detail', id),
    ]

    const [Liked, setLiked] = useState(false)

    const toggleLike = () => {
        setLiked(!Liked)
    }


    interface CarDetails {
        id: string;
        carDetailDescHeading: string;
        carDetailDescTitle: string;
        img: string;
        name: string;
        about: string;
        Slashedprice: number;
        Originalprice: number;
        Dat: string
    }

    // const star = Array(5).fill(0)
    // const [currentValue, setCurrentValue] = useState(0)
    // const [hoverValue, setHoverValue] = useState(undefined)

    // const handleClick = value =>{
    //     setCurrentValue(value)
    // }
    // const handleMouseOver = value =>{
    //     setHoverValue(value)
    // }
    // const handleMouseLeave = value =>{
    //     setHoverValue(undefined)
    // }

    return (
        <main className="flex justify-between pt-20">
            <div className="bg-[#fff] w-[15%] px-4">
                <p className="py-4 text-[#90A3BF]">Type</p>    

            <div className="flex space-x-6">
                    <input type="checkbox" className=" accent-[#3563E9]"/>
                    <h1 className="text-[18px]">Sport  (10)</h1>
            </div> 
            </div>

            <section className="w-[85%]">
            {selectedUser && (
                <div className='grid grid-cols-2 space-x-4 p-4'>
                    <div className='bg-[#3563E9] text-white p-4 rounded-lg shadow-md'>
                        <h1 className="text-[30px] mb-3 font-semi-bold">{selectedUser.carDetailDescHeading}</h1>
                        <div>
                             {/* {star.map((_, index) => {
                               return (
                                  <FaStar size={23}
                                  key
                                    style={{
                                        marginRight: 10,
                                        cursor: "pointer"
                                    }}
                                    color={(hoverValue || currentValue > index ? '' : '')}
                                    onClick={() => handleClick(index + 1)}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                  />
                               )
                             })} */}
                        </div>
                        <p className="text-[18px] leading-6 mb-2 font-medium">{selectedUser.carDetailDescTitle}</p>
                        <Image src={selectedUser.img} alt="img" className="mt-2 mx-auto w-[100%]  hover:scale-105 transition-all duration-500"></Image>
                    </div>

                    <div className="bg-[#fff]  text-white p-4 rounded-lg shadow-md">
                        <h1 className="text-2xl text-black font-semibold">{selectedUser.name}</h1>
                        <h1 className="text-[#596780] my-3">{selectedUser.about}</h1>

                        <div className="flex justify-between mt-3">
                            <p className="text-[#90A3BF]">Type Car</p>
                            <p className="text-[#596780]">Sport</p>
                            <p className="text-[#90A3BF]">Capacity</p>
                            <p className="text-[#596780]">2 Person</p>
                        </div>

                        <div className='flex justify-between px-4 items-center mt-5'>
                                <div>
                                    <div className='flex space-x-1 items-center'>
                                        <p className='text-[20px] font-bold text-black'>{selectedUser.Slashedprice}</p>
                                        <p className='text-sm font-semibold text-black'>{selectedUser.Dat}</p>
                                    </div>
                                    <p className=' line-through font-semibold text-sm'>{selectedUser.Originalprice}</p>
                                </div>
                                <Link href={`/popularCarDetails`} className='bg-[#3563E9] text-white py-3 px-4 rounded-md text-center w-[40%] text-[17px]' onClick={() => savedId(selectedUser?.id)}>Rent now</Link>
                            </div>
                        </div>
                    </div>
                    
            )
            }


            <div className="p-4">
                <div className="flex justify-between px-4">
                    <h1 className="text-[#90A3BF] my-3 ">Recent Car</h1>
                    <p className="text-[#3563E9] transition-all hover:underline duration-600  cursor-pointer">View All</p>
                </div>


                <div className='grid grid-cols-3 space-x-6 gap-y-6'>
                    {Popularcar.slice(5).map((item, i) => {
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
            <div className="flex justify-between px-4">
                    <h1 className="text-[#90A3BF] my-3 ">Recommended Car</h1>
                    <p className="text-[#3563E9] transition-all hover:underline duration-600  cursor-pointer">View All</p>
                </div>

                <div className='grid grid-cols-3 space-x-7 gap-y-7 '>
                    {Popularcar.slice(2).map((item, i) => {
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
                                <Image src={item.img} alt='carImage' className='my-6 hover:translate-y-[-10px] transition-all duration-500' onClick={() => savedId(item?.id)} />

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
            </div>
      </section>
        </main>
    )
}