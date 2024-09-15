import images from '@/public/assets'
import Image from "next/image";
import Link from 'next/link';
export default function header() {
  return (
    <div className="">
      <div className='bg-[#3563E9] px-4  flex flex-col md:flex md:flex-row justify-between items-center'>
        <div className="">
          <h1 className="text-white leading-10 text-3xl font-bold">Rent Cars  With  Trusted individuals</h1>
          <div className='flex flex-col md:flex md:flex-row my-4 space-x-3 items-center'>
              <Image src={images.group_profiles} alt='group_profiles'></Image>
              <p className='text-white font-semibold text-sm'>Simply browse through our extensive list of trusted doctors,<br className='hidden md:block'/> 
              schedule your appointment hassle-free.</p>
          </div>
          <button className='flex items-center bg-white py-3 px-4 space-x-4 my-2 transition-all duration-300 rounded-full mt-6'>
              <Link href='' className=''><p className='text-sm'>Rent Your's Now</p></Link>
              <Image src={images.arrow_icon} alt='arrow'></Image>
           </button>
        </div>
        <Image src={images.CarImage1} alt='carImage1' className='w-[780px]'></Image>
      </div>
    </div>
  );
}