import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const handleSignupClick = () => {
    modalRef.current.close();
    navigate('/signup');
  };

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <dialog id="my_modal_3" ref={modalRef} className="modal">
      <div className="modal-box dark:bg-gray-900 dark:text-white">
        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => modalRef.current.close()}
          >
            ✕
          </button>
          {/* </form> */}
          <h3 className="font-bold text-xl mb-8">Login</h3>
          <div className='dark:bg-gray-900 dark:text-white'>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required=""
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500">This field is required</span>}

            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required=""
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-red-500">This field is required</span>}

            </div>
            <div className='flex flex-row justify-between'>
              <button className="px-3 py-2 rounded-md bg-slate-600 text-white hover:bg-slate-800 duration-300 cursor-pointer w-40">Login</button>
              <div className='flex justify-center items-center'>
                Not registered? &nbsp;
                <span
                  className='underline text-blue-500 cursor-pointer'
                  onClick={handleSignupClick}
                >
                  Signup
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;
