import React from 'react'
import Banner from './Banner'
import Freebook from './Freebook'

function Home() {
  return (
    <div className='dark:bg-gray-900 dark:text-white'>
      <Banner></Banner>
      <Freebook></Freebook>
    </div>
  )
}

export default Home
