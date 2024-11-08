import images from '@/public/assets'
import Image from "next/image";
export default function pickup() {
    return (
        <main className="p-4">
        <div className='flex justify-between items-center'>
            <div className="bg-white p-4 rounded-xl w-[45%] shadow-md">
                <div className="flex space-x-2 items-center">
                    <input type="radio" />
                    <p className="text-[17px] font-semibold">Pick-Up</p>
                </div>

                <div className="grid grid-cols-3 py-2 px-4">
                    <div className="border-[#C3D4E966] border-solid border-r-[2px] p-3">
                        <p className="font-semibold text-xl  text-[#1A202C]">Locations</p>
                        <select name="" id="" className="text-[#90A3BF] outline-none border-none mt-4">
                            <option value="" className="text-[16px]">Select a city</option>
                        </select>
                    </div>
                    <div className="border-[#C3D4E966] border-solid border-r-[2px] p-3">
                        <p className="font-semibold text-xl text-[#1A202C]">Date</p>
                        <select name="" id="" className="text-[#90A3BF] outline-none border-none mt-4">
                            <option value="" className="text-[16px]">Select your date</option>
                        </select>
                    </div>
                    <div className="border-[#C3D4E966] border-solid border-r-[2px] p-3">
                        <p className="font-semibold text-xl  text-[#1A202C]">Time</p>
                        <select name="" id="" className="text-[#90A3BF] outline-none border-none mt-4">
                            <option value="" className="text-[16px] ">Select your time</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='bg-[#3563E9] p-5 rounded-xl'>
                <Image src={images.swapImg} alt='swapImg'></Image>
            </div>

            <div className="bg-white p-4 rounded-xl w-[45%] shadow-md">
                <div className="flex space-x-2 items-center">
                    <input type="radio" />
                    <p className="text-[17px] font-semibold">Drop-Off</p>
                </div>

                <div className="grid grid-cols-3 py-2 px-4">
                    <div className="border-[#C3D4E966] border-solid border-r-[2px] p-3">
                        <p className="font-semibold text-xl  text-[#1A202C]">Locations</p>
                        <select name="" id="" className="text-[#90A3BF] outline-none border-none mt-4">
                            <option value="" className="text-[16px]">Select a city</option>
                        </select>
                    </div>
                    <div className="border-[#C3D4E966] border-solid border-r-[2px] p-3">
                        <p className="font-semibold text-xl  text-[#1A202C]">Date</p>
                        <select name="" id="" className="text-[#90A3BF] outline-none border-none mt-4">
                            <option value="" className="text-[16px]">Select your date</option>
                        </select>
                    </div>
                    <div className="border-[#C3D4E966] border-solid border-r-[2px] p-3">
                        <p className="font-semibold text-xl  text-[#1A202C]">Time</p>
                        <select name="" id="" className="text-[#90A3BF] outline-none border-none mt-4">
                            <option value="" className="text-[16px] ">Select your time</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
{/* 
        <div className='flex justify-center  items-center mx-auto'>
            <div className='flex  mx-auto border-[2px] border-solid border-[#3563E9] w-[30%] rounded p-3 '>
             <Image src={images.RollRoyce}alt='RollRoyce' className='w-[60%]'></Image>
             </div>
             <div className=' flex justify-center mx-auto border-[2px] border-solid border-[#3563E9] w-[30%] rounded-full p-3'>
             <Image src={images.Nissan}alt='RollRoyce' className='w-[60%]'></Image>
             </div>
             <div className=' flex justify-center mx-auto border-[2px] border-solid border-[#3563E9] w-[30%] rounded-full p-3'>
             <Image src={images.Koenigsegg}alt='RollRoyce' className='w-[60%]'></Image>
             </div>
             <div className='flex justify-center mx-auto border-[2px] border-solid border-[#3563E9] w-[30%] rounded-full p-3'>
             <Image src={images.Rush}alt='RollRoyce' className='w-[60%]'></Image>
             </div>
        </div> */}
        </main>
    )
}