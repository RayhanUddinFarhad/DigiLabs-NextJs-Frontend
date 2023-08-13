"use client"

import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Page = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, signUp, googleLogin } = useContext(AuthContext)
    const router = useRouter()
    const [error, setError] = useState('')

    console.log(user);

    const onSubmit = (data) => {
        // Handle form submission

        const { name, email, password } = data



        signUp (email, password)
        .then (res => {

            const registered = res.user
            updateProfile(registered, {

                displayName: name
            })
            router.push('/')




        })
        .catch (err => {
            console.log(err.message);
            setError(err.message);
        })
        console.log(data);
    };

    const handleGoogleLogin = () => {




        googleLogin()
            .then(res => {

                const loggedInUser = res.user
                console.log(loggedInUser);
                router.push('/')



                

               
            })

            .catch(err => {

                console.log(err);
                setError(err.message)
            })
    }

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                <div className="text-center">
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create an account</h3>
                        <p className="">Already have an account? <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</Link></p>
                    </div>
                </div>
                <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-5"
                    >
                        <p className='text-red-500'>{error}</p>
                        <div>
                            <label className="font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${errors.name ? "border-red-500" : ""}`}
                            />
                            {errors.name && <p className="text-red-500">Name is required</p>}
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${errors.email ? "border-red-500" : ""}`}
                            />
                            {errors.email && <p className="text-red-500">Email is required</p>}
                        </div>
                        <div>
                            <label className="font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                {...register("password", { required: true })}
                                className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${errors.password ? "border-red-500" : ""}`}
                            />
                            {errors.password && <p className="text-red-500">Password is required</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            Create account
                        </button>
                    </form>
                    <div className="mt-5">
                        <button onClick={() => handleGoogleLogin()} className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* ... Google logo SVG ... */}
                            </svg>
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page;
