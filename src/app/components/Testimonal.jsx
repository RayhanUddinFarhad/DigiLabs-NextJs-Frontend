import Image from 'next/image';
import React from 'react';

const Testimonal = () => {
    return (


        // <section className="py-14">
        //     <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        //         <div className="max-w-3xl mx-auto text-center">
        //             <div className="pb-6">
        //                 <Image className='lg:mx-auto' src='assets/logo2.svg' width={128} height={32} alt=''></Image>                    </div>
        //             <figure>
        //                 <blockquote>
        //                     <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
        //                     Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I {`can't`} say enough about LookScout. Great job, I will definitely be ordering again!
        //                     </p>
        //                 </blockquote>
        //                 <div className="mt-6 flex justify-center">
        //                     <Image width={40} height={40} className='w-12 h-12 object-cover rounded-full' src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />                            <div className="mt-3">
        //                         <span className="block text-gray-800 font-semibold">Lisa Smith</span>
        //                         <span className="block text-gray-600 text-sm mt-0.5">Founder of meta</span>
        //                     </div>
        //                 </div>
        //             </figure>
        //         </div>
        //     </div>
        // </section>
        <section  data-aos= "flip-down"
        data-aos-duration="1000" className='bg-gray-100 p-5 max-w-screen-xl mx-auto'>

            <div className='text-center lg:hidden block p-2'>
                <h1 className='sm:text-3xl text-2xl font-bold'>What Our Customers Say</h1>
                <p>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win strategies to ensure domination.</p>


            </div>


           <div className='lg:text-center text-left lg:mx-auto lg:px-40 py-5 px-2 space-y-8'>

           <Image className='lg:mx-auto' src='assets/logo2.svg' width={128} height={32} alt=''></Image>
            <p className='lg:text-3xl text-xl font-semibold'>Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I {`can't`} say enough about LookScout. Great job, I will definitely be ordering again!</p>

            <div className='flex lg:justify-center'>

                <Image width={40} height={40} className='w-12 h-12 object-cover rounded-full' src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />

                <div className='text-sm ml-2 '>

                    <p className='font-semibold'>Lisa smith</p>
                    <p>CEO Company</p>
                </div>

            </div>
           </div>
        </section>
    );
};

export default Testimonal;