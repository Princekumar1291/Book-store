import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards';
function Freebook() {
  const filteredList = list.filter((item) => item.category === "free");
  return (
    <div className='p-4 md:px-8'>
      <div>
        <h1 className='font-bold md:text-xl'>Free Book </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officia laudantium rem adipisicing elit. Similique officia laudantium rem!</p>
      </div>
      <div>
        <Cards filteredList={filteredList}></Cards>
      </div>
    </div>
  )
}

export default Freebook
