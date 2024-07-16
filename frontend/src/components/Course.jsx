import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
function Course({book}) {
  return (
    <div className='min-h-screen max-w-screen-2xl mx-2 md:m-5 lg:mx-8 py-4 md:pt-8'>
      <div className='text-3xl font-semibold'>
        Unlock Your Potential: Master the Latest Tech Skills with <span className='text-red-400'>Our Expert-Led Courses!</span>
      </div>
      <p className='my-8'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt minima iure dolores, ex sed recusandae, nesciunt nam quasi suscipit deleniti id velit tenetur?
      </p>
      <Link to={'/'}><button className="btn btn-primary w-36">Back</button></Link>

      <div className='flex gap-4 flex-wrap justify-center my-8'>
        {
          book.map((data) =>
            <Card data={data} key={data._id}></Card>
          )
        }
      </div>
    </div>
  )
}

export default Course
