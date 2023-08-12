import Image from 'next/image';
import React from 'react';

const Testimonal = () => {
    return (
        <section className='text-center mx-auto px-40 space-y-8'>


            <Image className='mx-auto' src='assets/logo2.svg' width={128} height={32} alt=''></Image>
            <p className='text-3xl font-semibold'>Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I {`can't`} say enough about LookScout. Great job, I will definitely be ordering again!</p>

            <div className='flex justify-center'>

                <Image width={40} height={40} className='w-12 h-12 object-cover rounded-full' src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />

                <div className='text-sm ml-2 '>

                    <p className='font-semibold'>Lisa smith</p>
                    <p>CEO Company</p>
                </div>
                
            </div>
        </section>
    );
};

export default Testimonal;