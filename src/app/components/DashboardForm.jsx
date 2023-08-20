'use client'

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LogoUpdate from "./LogoUpdate";
import axios from "axios";
import Swal from "sweetalert2";

const DashboardForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const [status, setStatus] = useState(null);


  const onSubmitHeader = async(data) => {

    console.log(data.header);


    

    axios.post('https://digilabs-backend.vercel.app/header', data)
    .then(res => {console.log(res.data)
    
    
      if (res.data.insertedId || res.data.modifiedCount > 0 ) {



        Swal.fire(
            'Good job!',
            'Header updated successfully!',
            'success'
          )
    }




    reset()
    })
    .catch(err => console.error(err));
  

  }
  return (
    <div>
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Change UI Data
            </h3>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmitHeader)}
          className="mt-8 space-y-5"
        >
          <div>
            <p>{status}</p>
            <label className="font-medium">Change header of the banner</label>
            <input
            required
              type="text"
              name="header"
              {...register("header", { required: true, maxLength: 50 })}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button
            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          >
            Change
          </button>
        </form>

        <LogoUpdate></LogoUpdate>
       
      </div>
    </div>
  );
};

export default DashboardForm;
