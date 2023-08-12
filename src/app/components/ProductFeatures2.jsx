import Image from 'next/image';
import React from 'react';

const ProductFeatures2 = () => {
    const features = [
        {
            icon:
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
            <path d="M27.4839 4.07472L4.88822 15.3143C4.31362 15.6001 4.3947 16.44 5.01349 16.6118L9.218 17.8129L22.9175 9.14002L13.0883 18.9185V27.3001C13.0883 27.9361 13.8731 28.2412 14.3065 27.7736L19.8369 20.7272L27.0956 22.7424C27.535 22.8644 27.9727 22.5438 27.9861 22.0902L28.4997 4.71999C28.5153 4.19198 27.9588 3.83849 27.4839 4.07472Z" fill="white"/>
          </svg>,
            title: "Explore ideas together",
            desc: "Engage audience segments and finally create actionable insights. Amplify vertical integration."
        },
        {
            icon:
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
            <path d="M16.5 2.66675C11.3454 2.66675 7.16669 6.84542 7.16669 12.0001C7.16669 13.3815 7.46766 14.6962 8.00887 15.8792C8.34596 16.6161 8.7279 17.3403 9.09306 18.03L9.1329 18.1052C9.4895 18.7786 9.82905 19.4198 10.1316 20.0648C10.7601 21.4048 11.1667 22.6373 11.1667 23.8809C11.1667 24.6831 11.817 25.3334 12.6192 25.3334H20.3808C21.183 25.3334 21.8334 24.6831 21.8334 23.8809C21.8334 22.6373 22.2399 21.4048 22.8685 20.0648C23.171 19.4199 23.5105 18.7787 23.8671 18.1053L23.907 18.03C24.2721 17.3403 24.6541 16.6161 24.9912 15.8792C25.5324 14.6962 25.8334 13.3815 25.8334 12.0001C25.8334 6.84542 21.6547 2.66675 16.5 2.66675Z" fill="white"/>
            <path d="M12.5 26.6667C11.7636 26.6667 11.1667 27.2637 11.1667 28.0001C11.1667 28.7365 11.7636 29.3334 12.5 29.3334H20.5C21.2364 29.3334 21.8334 28.7365 21.8334 28.0001C21.8334 27.2637 21.2364 26.6667 20.5 26.6667H12.5Z" fill="white"/>
          </svg>,
            title: "Bring those ideas to life",
            desc: "Engage audience segments and finally create actionable insights. Amplify vertical integration."
        },

        {
            icon:
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
  <path d="M2.5759 11.3796C2.09412 12.8322 1.83331 14.3856 1.83331 15.9999C1.83331 21.5391 4.90398 26.3611 9.43592 28.8565L14.7447 16.6889L2.5759 11.3796Z" fill="white"/>
  <path d="M3.64343 8.93593L15.1666 13.9636V1.39307C10.1936 1.84121 5.93634 4.77168 3.64343 8.93593Z" fill="white"/>
  <path d="M16.5 30.6666C14.8857 30.6666 13.3322 30.4058 11.8796 29.924L17.7107 16.5593C17.7516 16.4708 17.7832 16.377 17.804 16.2793C17.8262 16.1764 17.8357 16.0727 17.8333 15.9702V1.39307C25.3086 2.0667 31.1666 8.34922 31.1666 15.9999C31.1666 24.1001 24.6002 30.6666 16.5 30.6666Z" fill="white"/>
</svg>,
            title: "Ship better outcomes",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
        }
    ]
    return (
        <section className='bg-[#151B28]'>


      
        <div className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-[#A5ACBA] gap-16 justify-between md:px-8 flex md:flex-row flex-col-reverse">
        <div data-aos= "fade-up"
   data-aos-duration="1000" className="mt-12 lg:mt-0">
               <Image className='' src="/assets/productFeature2.png" width={560} height={560} alt=''></Image>
            </div>
                <div data-aos= "fade-down"
   data-aos-duration="1000" className="mt-12 max-w-lg lg:max-w-none">
                    <ul className="space-y-8">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4 ">
                                    <div className="flex-none w-12 h-12 bg-[#437EF7] text-white rounded-lg flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-white font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="my-3">
                                            {item.desc}
                                        </p>
                                        <p className='text-[#437EF7] font-semibold text-sm'>Learn More 🡪</p>

                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            
        </div>
    </div>
    </section>
    );
};

export default ProductFeatures2;