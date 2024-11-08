import images from '@/public/assets'
import Image from "next/image";
import Link from 'next/link';
export default function header() {
  return (
    <main >
    <div className="grid grid-cols-2 gap-4 p-4 pt-24"> 
        <div className="bg-[#54A6FF] text-white p-4 rounded-xl">
          <h1 className="text-[32px] mb-3 font-medium">The Best Platform for Car Rental</h1>
          <p className="text-[18px] leading-6 mb-2 font-medium">Ease of doing a car rental safely and reliably. Of course<br className='hidden md:block'/> at a low price.</p>
          <button className="bg-[#3563E9] rounded-md p-3 text-center text-white mt-4 mb-3 w-[17%] font-semibold hover:scale-105 transition-all duration-500">Rental Car</button>
          <Image src={images.Koenigsegg} alt='car' className="mt-2 mx-auto w-[80%]  hover:scale-105 transition-all duration-500"/>
        </div>
        <div className="bg-[#3563E9] text-white p-4 rounded-xl">
          <h1 className="text-[32px] mb-3 font-medium">Easy way to rent a car at a low price</h1>
          <p className="text-[18px] leading-6 mb-2 font-medium">Providing cheap car rental services and safe and <br />comfortable facilities.</p>
          <button className="bg-[#54A6FF] rounded-md p-3  text-center text-white mt-4 mb-3 w-[17%] font-semibold hover:scale-105 transition-all duration-500">Rental Car</button>
          <Image src={images.Nissan} alt='car' className="mt-2 mx-auto w-[80%] hover:scale-105 transition-all duration-500"/>
        </div>
     </div>
     </main>
  );
}