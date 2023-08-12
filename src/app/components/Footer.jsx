"use client"
import Image from 'next/image';
import React from 'react';

const Footer = () => {
    const footerNavs = [
        {
            label: "Resources",
            items: [
                {
                    href: '',
                    name: 'Community'
                },
                {
                    href: '',
                    name: 'Events'
                },
                {
                    href: '',
                    name: 'Hero Center'
                },
                {
                    href: '',
                    name: 'Partners'
                },
            ],
        },
        {
            label: "Products",
            items: [
                {
                    href: '',
                    name: 'Integrations'
                },
                {
                    href: '',
                    name: 'Solutions'
                },
                {
                    href: '',
                    name: 'Features'
                },
                {
                    href: '',
                    name: 'Enterprise'
                },
            ],
        }
    ]
    return (
        <footer className="text-white bg-black px-4 py-10 mt-10  mx-auto md:px-8">
            <div className="gap-6  md:flex">
                <div className='max-w-sm'>
<Image src='/assets/lookscout.png' width={160} height={40} alt=''></Image>
<p className='text-[#A5ACBA] my-5'>Generate outside the box thinking with the possibility to targtet the low.</p>
                </div>




            <div className="flex-1 mb-3 lg:mb-0    items-center justify-around flex  md:space-y-0 md:mt-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4"
                                key={idx}
                            >
                                <h4 className="  font-bold">
                                    { item.label }
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <a 
                                                href={el.href}
                                                className="hover:underline text-[#A5ACBA] hover:text-indigo-600"
                                            
                                            >
                                                { el.name }
                                            </a>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
                <div className="lg:ml-5">
                    <div className="max-w-xs">
                        <h4 className='font-bold text-sm'>Get Enail Notification</h4>
                        <p className="leading-relaxed mt-2 text-[#A5ACBA] text-[15px]">
                        Generate outside the box thinking with the possibility to targtet the low                        </p>
                    </div>
                    <form 
                        onSubmit={(e) => e.preventDefault()}
                    >
                      
                        <div className="max-w-sm flex items-center bg-[#2C3444]  rounded-md ">
                            <input 
                                type="email"
                                placeholder="Enter your email..."
                                className="w-full p-2.5 outline-none bg-inherit"
                            />
                            <button
                                className="btn-primary"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                
            </div>
            <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0 text-[#A5ACBA]">
                © 2023 Lookscout. All Rights Reserved.                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-1">
                        <li className="w-10 h-10  rounded-full flex items-center justify-center">
                            <a href="javascript:void()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 17.9895 4.8882 22.954 10.625 23.8542V15.4688H7.57812V12H10.625V9.35625C10.625 6.34875 12.4166 4.6875 15.1576 4.6875C16.4701 4.6875 17.8438 4.92188 17.8438 4.92188V7.875H16.3306C14.84 7.875 14.375 8.80008 14.375 9.75V12H17.7031L17.1711 15.4688H14.375V23.8542C20.1118 22.954 24.5 17.9895 24.5 12Z" fill="white"/>
</svg>
                            </a>
                        </li>

                        <li className="w-10 h-10  rounded-full flex items-center justify-center">
                            <a href="javascript:void()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M24.2628 12.2759C24.2628 11.4602 24.1967 10.64 24.0556 9.83752H12.7368V14.4585H19.2185C18.9496 15.9489 18.0853 17.2673 16.8199 18.105V21.1034H20.6869C22.9577 19.0133 24.2628 15.9268 24.2628 12.2759Z" fill="white"/>
  <path d="M12.7373 24.0001C15.9737 24.0001 18.7031 22.9374 20.6917 21.1032L16.8247 18.1048C15.7489 18.8368 14.3599 19.2512 12.7417 19.2512C9.61108 19.2512 6.95666 17.1392 6.00424 14.2996H2.01379V17.3905C4.05091 21.4427 8.20009 24.0001 12.7373 24.0001Z" fill="white"/>
  <path d="M5.99972 14.3001C5.49706 12.8097 5.49706 11.1959 5.99972 9.70557V6.61462H2.01368C0.311682 10.0054 0.311682 14.0003 2.01368 17.391L5.99972 14.3001Z" fill="white"/>
  <path d="M12.7373 4.74948C14.4481 4.72302 16.1016 5.36678 17.3406 6.54848L20.7667 3.12243C18.5973 1.08532 15.718 -0.0346491 12.7373 0.000625561C8.20009 0.000625561 4.05091 2.55804 2.01379 6.61462L5.99983 9.70557C6.94784 6.86155 9.60667 4.74948 12.7373 4.74948Z" fill="white"/>
</svg>
                            </a>
                        </li>

                        <li className="w-10 h-10  rounded-full flex items-center justify-center">
                            <a href="javascript:void()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M22.1842 18.7033C21.8212 19.5418 21.3916 20.3136 20.8938 21.0232C20.2153 21.9906 19.6598 22.6602 19.2317 23.032C18.568 23.6424 17.8569 23.955 17.0954 23.9728C16.5488 23.9728 15.8896 23.8172 15.1222 23.5017C14.3523 23.1876 13.6447 23.032 12.9978 23.032C12.3193 23.032 11.5916 23.1876 10.8133 23.5017C10.0337 23.8172 9.40576 23.9816 8.92563 23.9979C8.19543 24.0291 7.4676 23.7076 6.74111 23.032C6.27742 22.6276 5.69744 21.9343 5.00265 20.9521C4.25719 19.9033 3.64432 18.687 3.16419 17.3004C2.64998 15.8026 2.39221 14.3523 2.39221 12.9482C2.39221 11.3398 2.73976 9.95259 3.43588 8.79011C3.98298 7.85636 4.7108 7.11979 5.62174 6.57906C6.53267 6.03834 7.51694 5.76279 8.5769 5.74516C9.15688 5.74516 9.91745 5.92456 10.8626 6.27715C11.8051 6.63091 12.4103 6.81032 12.6756 6.81032C12.8739 6.81032 13.5462 6.60054 14.6859 6.18233C15.7636 5.79449 16.6732 5.63391 17.4184 5.69716C19.4376 5.86012 20.9546 6.6561 21.9634 8.09013C20.1576 9.18432 19.2643 10.7169 19.282 12.6829C19.2983 14.2142 19.8539 15.4886 20.9457 16.5004C21.4405 16.97 21.9931 17.333 22.6079 17.5907C22.4745 17.9774 22.3338 18.3477 22.1842 18.7033ZM17.5532 0.480137C17.5532 1.68041 17.1147 2.8011 16.2407 3.8384C15.1859 5.07155 13.9101 5.78412 12.5266 5.67168C12.5089 5.52769 12.4987 5.37614 12.4987 5.21688C12.4987 4.06462 13.0003 2.83147 13.8911 1.82321C14.3358 1.3127 14.9014 0.888228 15.5873 0.549615C16.2718 0.216055 16.9192 0.031589 17.528 0C17.5458 0.160458 17.5532 0.320926 17.5532 0.480121V0.480137Z" fill="white"/>
</svg>
                            </a>
                        </li>

                        <li className="w-10 h-10  rounded-full flex items-center justify-center">
                            <a href="javascript:void()">
                               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M17.3503 0H7.64973C3.70735 0 0.5 3.20735 0.5 7.14973V16.8503C0.5 20.7926 3.70735 24 7.64973 24H17.3503C21.2926 24 24.5 20.7926 24.5 16.8503V7.14973C24.5 3.20735 21.2926 0 17.3503 0ZM22.0856 16.8503C22.0856 19.4655 19.9655 21.5856 17.3503 21.5856H7.64973C5.0345 21.5856 2.9144 19.4655 2.9144 16.8503V7.14973C2.9144 4.53446 5.0345 2.4144 7.64973 2.4144H17.3503C19.9655 2.4144 22.0856 4.53446 22.0856 7.14973V16.8503Z" fill="white"/>
  <path d="M12.5 5.79272C9.07729 5.79272 6.29272 8.57729 6.29272 11.9999C6.29272 15.4226 9.07729 18.2072 12.5 18.2072C15.9227 18.2072 18.7072 15.4226 18.7072 11.9999C18.7072 8.57725 15.9227 5.79272 12.5 5.79272ZM12.5 15.7928C10.4052 15.7928 8.70712 14.0947 8.70712 12C8.70712 9.90523 10.4053 8.20712 12.5 8.20712C14.5947 8.20712 16.2928 9.90523 16.2928 12C16.2928 14.0947 14.5947 15.7928 12.5 15.7928Z" fill="white"/>
  <path d="M18.719 7.32673C19.5405 7.32673 20.2064 6.66083 20.2064 5.83939C20.2064 5.01796 19.5405 4.35205 18.719 4.35205C17.8976 4.35205 17.2317 5.01796 17.2317 5.83939C17.2317 6.66083 17.8976 7.32673 18.719 7.32673Z" fill="white"/>
</svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
    );
};

export default Footer;