"use client"
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { AuthContext } from '../context/AuthProvider';
import { useRouter } from 'next/navigation';



const Page = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {logIn , googleLogin} = useContext(AuthContext)
    const router = useRouter()

    

    const onSubmit = (data) => {
        // Handle form submission



        const {email, password} = data 



        logIn(email, password)
        .then (res => {
            const use = res.user
            reset()
            router.push('/')
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
            })
    }

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600">
                <div className="text-center">
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Sign In</h3>
                        <p className="">{`Don't`} have an account? <Link href="/signin"className="font-medium text-indigo-600 hover:text-indigo-500">Create an account</Link></p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-8 space-y-5"
                >
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
                        Log In
                    </button>
                </form>
                <button onClick={()=>handleGoogleLogin()} className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
                    <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* ... Google logo SVG ... */}
                    </svg>
                    Continue with Google
                </button>
            </div>
        </main>
    );
};

export default Page;
