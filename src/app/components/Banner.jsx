import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    const navigation = [
        { title: "Customers", path: "javascript:void(0)" },
        { title: "Careers", path: "javascript:void(0)" },
    ]
    return (


        <div className="bg-[#3971E7]">

            <section className="pt-10 mx-auto max-w-screen-2xl pb-12 px-4 items-center flex lg:flex-row flex-wrap-reverse  justify-center md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-white font-bold text-4xl xl:text-5xl">
                        Your Supercharged      <br />                Design Workflow
                    </h1>
                    <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 ">
                        We’ve been told it is not possible to overachieve our customers’ expectations. We have not reinvented the wheel, we decided to build upon it.                    </p>
                    <button> <Link href='' className=" btn-primary">
                        Get started
                    </Link></button>

                </div>
                <div className="flex-1 justify-center text-center mt-7 md:mt-0 md:ml-3 relative flex items-center mb-8 lg:mb-0 lg: max-w-lg">
                    <div className='mt-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='lg:w-[113px] w-[68px]' viewBox="0 0 113 112" fill="none">
                            <circle cx="56.5" cy="56" r="56" fill="white" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 113 224" fill="none">
                            <path d="M0.5 112L112.5 224V112H0.5Z" fill="#AEC9FE" />
                            <path d="M0.5 0L112.5 112V0H0.5Z" fill="#AEC9FE" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className='lg:w-[113px] w-[68px]' viewBox="0 0 113 112" fill="none">
                            <circle cx="56.5" cy="56" r="55" stroke="white" stroke-width="2" />
                            <circle cx="56.5" cy="56" r="28" fill="#B1CCFB" />
                        </svg>

                    </div>


                    <div className=' '>
                        <svg xmlns="http://www.w3.org/2000/svg" className='lg:w-[224px] w-[137px]'  viewBox="0 0 225 112" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M56.5 110C27.0107 110 3.04231 86.3619 2.50907 57H56.5088C56.9524 82.3339 74.219 103.565 97.6143 110H56.5ZM56.5 2C27.0107 2 3.04231 25.6381 2.50907 55H56.5088C56.9524 29.6661 74.219 8.4347 97.6143 2H56.5ZM111.5 109.991C82.4707 109.464 59.0363 86.0293 58.5091 57H111.5V109.991ZM113.5 112H112.5H111.5H56.5C25.5721 112 0.5 86.9279 0.5 56C0.5 25.0721 25.5721 0 56.5 0H111.5H112.5H113.5H168.5H169.5V0.00874914C199.967 0.542244 224.5 25.4061 224.5 56C224.5 86.5939 199.967 111.458 169.5 111.991V112H168.5H113.5ZM111.5 2.00907C82.4707 2.53627 59.0363 25.9707 58.5091 55H111.5V2.00907ZM113.5 45.4096V2H153.614C133.242 7.60338 117.516 24.4272 113.5 45.4096ZM113.5 66.5904C117.516 87.5728 133.241 104.397 153.614 110H113.5V66.5904ZM167.5 109.991C138.471 109.464 115.036 86.0293 114.509 57H167.5V109.991ZM114.509 55H167.5V2.00907C138.471 2.53627 115.036 25.9707 114.509 55ZM169.5 109.991C198.862 109.458 222.5 85.4893 222.5 56C222.5 26.5107 198.862 2.54231 169.5 2.00907V109.991Z" fill="white" />
                        </svg>

                        <Image width={224} height={224} src="/assets/person.png"  alt="" />
                        <svg className='opacity-10' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 225 112" fill="none">
                            <path d="M112.5 112C174.356 112 224.5 61.8559 224.5 0H168.5C168.5 30.9279 143.428 56 112.5 56C81.5721 56 56.5 30.9279 56.5 0H0.5C0.5 61.8559 50.6441 112 112.5 112Z" fill="#000" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" className='lg:w-[224px] w-[137px]'  viewBox="0 0 225 112" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M169.491 111.991C199.962 111.462 224.5 86.5968 224.5 56C224.5 25.4032 199.962 0.537575 169.491 0.00860909L169.5 4.9831e-06L55.5 0L55.5086 0.00860411C25.038 0.537568 0.500002 25.4032 0.5 56C0.499999 86.5968 25.038 111.462 55.5086 111.991L55.5 112H56.4707L56.5 112L168.5 112L168.53 112H169.5L169.491 111.991ZM168.5 96C146.409 96 128.5 78.0914 128.5 56C128.5 33.9086 146.409 16 168.5 16V96Z" fill="white" />
                        </svg>

                    </div>

                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" className='lg:w-[113px] w-[68px]' viewBox="0 0 113 112" fill="none">
                            <path d="M93.935 97.6494C105.333 87.3984 112.5 72.5362 112.5 56C112.5 25.0721 87.4279 0 56.5 0C39.6196 0 24.4837 7.46882 14.2165 19.2821L93.935 97.6494Z" fill="white" />
                            <path d="M92.416 98.9673C82.6937 107.103 70.1687 112 56.5 112C25.5721 112 0.5 86.9279 0.5 56C0.5 42.6752 5.15379 30.4374 12.9247 20.8233L92.416 98.9673Z" fill="white" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" className='lg:w-[113px] w-[68px]' viewBox="0 0 113 224" fill="none">
                            <path d="M0.5 112C0.5 173.856 50.6441 224 112.5 224V0C50.6441 0 0.5 50.1441 0.5 112Z" fill="#AEC9FE" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className='lg:w-[113px] w-[68px]' viewBox="0 0 113 224" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M56.5 0C87.0968 0 111.962 24.538 112.491 55.0086L112.5 55V55.9705L112.5 56V168L112.5 168.029V169L112.491 168.991C111.962 199.462 87.0968 224 56.5 224C25.9032 224 1.03757 199.462 0.508604 168.991L0.5 169V56V55L0.508604 55.0086C1.03757 24.538 25.9032 0 56.5 0ZM2.50001 70.8857V168C2.50001 197.823 26.6766 222 56.5 222C86.3234 222 110.5 197.823 110.5 168V70.8856C103.981 94.5882 82.2738 112 56.5 112C30.7262 112 9.0192 94.5882 2.50001 70.8857ZM110.5 56L2.50001 56C2.50001 26.1766 26.6766 2 56.5 2C86.3234 2 110.5 26.1766 110.5 56Z" fill="white" />
                        </svg>




                    </div>
                </div>
            </section>
        </div>

    );
};

export default Banner;