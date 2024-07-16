import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
function Signup() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit =async (data) => {
    await axios.post("http://localhost:4001/user/signup",data)
    .then((res)=>{
      console.log(res.data.user)
      localStorage.setItem("User",JSON.stringify(res.data.user))
      if(res.data){
        toast.success('Signup Successfully');
      }
    })
    .catch((err)=>{
      if(err.response){
        toast.error("Error: "+ err.response.data.message);
      }
      else alert("Error"+err)
      console.log(err)
    })
  }

  
  return (
    <div>
      <div id="" className="w-[80%] m-auto my-48 border p-8 rounded-lg border-gray-400">
        <div className="dark:bg-gray-900 dark:text-white">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            {/* </form> */} 
            <h3 className="font-bold text-xl mb-8">Signup</h3>
            <div className='dark:bg-gray-900 dark:text-white'>
              <div className="mb-6">
                <label htmlFor="signupName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label> 
                <input type="text" id="signupName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john doe" required="" 
                {...register("fullname", { required: true })}
                />
                {errors.fullname && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="mb-6">
                <label htmlFor="email_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                <input type="email" id="email_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required="" 
                {...register("email", { required: true })}
                />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>

              <div className="mb-6">
                <label htmlFor="signupPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" id="signupPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required="" 
                {...register("password", { required: true })}
                />
                {errors.password && <span className="text-red-500">This field is required</span>}
              </div>
              <div className='flex flex-row justify-between'>
                <button className="px-3 py-2 rounded-md bg-slate-600 text-white hover:bg-slate-800 duration-300 cursor-pointer w-40">Signup</button>
                <div className='flex justify-center items-center'>
                  Have account! &nbsp; <button
                    className='underline text-blue-500 cursor-pointer'
                    onClick={() => {
                      document.getElementById("my_modal_3").showModal()
                      navigate("/")
                    }}
                  >Login</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
