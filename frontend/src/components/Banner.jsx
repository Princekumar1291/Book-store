import React from 'react'
import Bimg from "../../public/Banner.jpg"
function Banner() {
  return (
    <div className='max-w-screen-2xl mx-2 md:m-5 lg:mx-8 flex flex-col lg:flex-row py-4 md:pt-14 '>
      <div className='w-full lg:w-1/2 text-center lg:text-start space-y-6 md:space-y-12 mx-1
       md:mx-2 my-6 md:my-12 order-2 lg:order-none'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-left'>Hello welcomes here to learn something <span className='text-pink-500'>
          new everyday!!
        </span>
        </h2>
        <p className='text-left'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quidem ex quaerat voluptates eius impedit dolorem obcaecati libero magnam, nihil enim repudiandae totam ad alias aliquid quae reiciendis. Aliquid eum nulla delectus. Ea, minima!
        </p>
        <div className='w-[80%]'>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Enter Your Email To Login" />
          </label>
        </div>
        <button className="btn btn-info flex w-[100px] md:w-[200px]">Login</button>
      </div>
      <div className='w-full lg:w-1/2 rounded-lg pt-2 order-1 lg:order-none'>
        <img className='rounded-lg m-auto w-[95%] md:w[85%]' loading="lazy" src={Bimg} alt="" />
      </div>
    </div>
  )
}

export default Banner
