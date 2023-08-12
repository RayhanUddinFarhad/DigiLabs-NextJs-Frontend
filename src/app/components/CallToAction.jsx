import React from 'react';

const CallToAction = () => {
    return (
        <section className="max-w-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <p className='text-indigo-600 font-semibold  text-sm'>1% OF THE INDUSTRY</p>

                <h3 className="text-3xl text-gray-800 font-bold">
                    Welcome to your new digital reality that will rock your world truly at all throughout.                        </h3>

            </div>
            <div className="mt-6">
                <form
                    className="items-center justify-center sm:flex">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="text-gray-500 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
                    />
                    <button
                        className="btn-primary w-full lg:w-auto"
                    >
                        Submit
                    </button>
                </form>
                <div className='mt-8 font-semibold text-sm grid lg:grid-cols-3 grid-cols-2 lg:gap-16'>


                    <p className='flex items-center '>

                        <svg className='bg-indigo-600 rounded-full mr-2' xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M10.5 4L5.35355 9.14645C5.15829 9.34171 4.84171 9.34171 4.64645 9.14645L2.5 7" stroke="white" stroke-width="1.67" stroke-linecap="round" />
                        </svg>
                        Fully secure

                    </p>
                    <p className='flex items-center '>

                        <svg className='bg-indigo-600 rounded-full mr-2' xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M10.5 4L5.35355 9.14645C5.15829 9.34171 4.84171 9.34171 4.64645 9.14645L2.5 7" stroke="white" stroke-width="1.67" stroke-linecap="round" />
                        </svg>
                        24/7 support
                    </p>
                    <p className='flex items-center '>

                        <svg className='bg-indigo-600 rounded-full mr-2' xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M10.5 4L5.35355 9.14645C5.15829 9.34171 4.84171 9.34171 4.64645 9.14645L2.5 7" stroke="white" stroke-width="1.67" stroke-linecap="round" />
                        </svg>
                        Done Deal
                    </p>
                </div>
            </div>
        </section>
    )
}


export default CallToAction;