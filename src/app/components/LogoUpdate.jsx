'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const img_hosting_token = process.env.NEXT_PUBLIC_IMAGE_KEY;

const LogoUpdate = () => {

  const image_key = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  const [reloadPage, setReloadPage] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const onSubmitPhoto = async (data) => {
    const formdata = new FormData()
    formdata.append('image', data.logo[0])

    fetch(image_key, {
      method: 'POST',
      body: formdata
    })
      .then(res => res.json())
      .then(data => {

        if (data.success) {

          console.log(data?.data?.display_url
            );
  
          const imageURL = data?.data?.display_url
  
          fetch(`https://digilabs-backend.vercel.app/image`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
  
            body: JSON.stringify({ imageURL })
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
  
              if (data.insertedId || data.modifiedCount > 0) {
                Swal.fire({
                  icon: 'success',
                  title: 'Good job!',
                  text: 'Logo has been updated. ',
                  showCancelButton: false,
                  confirmButtonText: 'OK',
                })

                setTimeout(() => {
                  setReloadPage(true); 
                }, 1000); 
              }              
  
  
  
  
  
  
              reset()
  
  
  
            })
            .catch(err => { console.log(err) });
  
  
         }


      })

  };

  useEffect(() => {
    if (reloadPage) {
      window.location.reload(); // Reload the page
    }
  }, [reloadPage]);


  return (
    <form
      onSubmit={handleSubmit(onSubmitPhoto)}
      className="mt-8 space-y-5"
    >
      <div>
        <label className="font-medium">Upload logo</label>
        <input
          type="file"
          required
          accept='.png,  .jpg, .jpeg'
          name="logo"
          {...register("logo", { required: true })}
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none  shadow-md rounded-lg"
        />
      </div>
      <button
        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
      >
        Change
      </button>
    </form>
  );
};

export default LogoUpdate;