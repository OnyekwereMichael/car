import Image from "next/image";
import images from '@/public/assets'
export default function footer() {
  return ( 
    <footer className=' shadow-md '>
    <section className='flex justify-between p-10  shadow-md bg-[#fff] sm:flex-wrap'>
        <div>
            <Image src={images.pageLogo} alt="pageLogo" />
            <div className='flex items-center  space-x-4 border-solid rounded-lg  border-[#262626] border-[2px]  p-2 my-4'>
                <div className='flex gap-2 items-center'>
                    <Image src={images.emailLogo} alt="email" />
                    <input type="text" placeholder='Enter Your Email' className='bg-transparent border-[#262626] border-none outline-none text-[#999999] mt-[2px]' />
                </div>
                <Image src={images.ChatLogo} alt="Chat" className='w-[25px] h-[25px] text-[black]' />
            </div>
        </div>

        <div className='leading-9 '>
            <p className=' cursor-pointer font-semibold text-[20px]'>Home</p>
            <p className=' cursor-pointer text-[16px]'>Features</p>
            <p className=' cursor-pointer text-[16px]'>Hero Section</p>
            <p className=' cursor-pointer text-[16px]'>Properties</p>
            <p className=' cursor-pointer text-[16px]'>Testimonials</p>
            <p className=' cursor-pointer text-[16px]'>FAQ’s</p>
        </div>
        <div className='leading-9'>
            <p className=' cursor-pointer font-semibold text-[20px]'>About Us</p>
            <p className=' cursor-pointer text-[16px]'>Our Story</p>
            <p className=' cursor-pointer text-[16px]'>Our Works</p>
            <p className=' cursor-pointer text-[16px]'>How It Works</p>
            <p className=' cursor-pointer text-[16px]'>Our Team</p>
            <p className=' cursor-pointer text-[16px]'>Our Clients</p>
        </div>
        <div className='leading-9'>
            <p className=' cursor-pointer font-semibold text-[20px]'>Properties</p>
            <p className=' cursor-pointer text-[16px]'>Portfolio</p>
            <p className=' cursor-pointer text-[16px]'>Categories</p>
        </div>
        <div className='leading-9'>
            <p className=' cursor-pointer font-semibold text-[20px]'>Services</p>
            <p className=' cursor-pointer text-[16px]'>Valuation Mastery</p>
            <p className=' cursor-pointer text-[16px]'>Strategic Marketing</p>
            <p className=' cursor-pointer text-[16px]'>Negotiation Wizardry</p>
            <p className=' cursor-pointer text-[16px]'>Closing Success</p>
            <p className=' cursor-pointer text-[16px]'>Property Management</p>
        </div>
        <div className='leading-9'>
            <p className=' cursor-pointer font-semibold text-[20px]'>Contact Us</p>
            <p className=' cursor-pointer text-[16px]'>Contact Form</p>
            <p className=' cursor-pointer text-[16px]'>Our Offices</p>
        </div>
    </section>

<hr />
    <div className="flex bg-[white]   justify-between px-8 items-center p-4 shadow-lg">
    <p className="text-[16px] font-semibold">Terms & Conditions</p>
      <div className="flex space-x-5">
          <p className="text-[16px] font-semibold">@2023 Morrent. All Rights Reserved.</p>
       </div>
       <div className="flex space-x-7">
          <Image src={images.Facebook} alt="Facebook"/>
          <Image src={images.Linkedin} alt="Linkedin"/>
          <Image src={images.Twitter} alt="Twitter"/>
          <Image src={images.Youtube} alt="Youtube"/>
       </div>
    </div>
</footer>
  );
}