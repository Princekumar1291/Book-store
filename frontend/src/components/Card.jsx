import React from 'react'

function Card({ data }) {
  return (
    <div className="card bg-base-100 w-full md:w-80 lg:w-96 shadow-xl mb-12 hover:scale-105 duration-200 dark:bg-gray-700 dark:text-white">
      <figure>
        <img
          src={data.image}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {data.name}
          <div className="badge badge-secondary">{data.category}</div>
        </h2>
        <p>{data.title}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline  p-4 font-semibold">$ {data.price + '0'}</div>
          <div className="badge badge-outline hover:bg-pink-200 p-4 font-semibold">Buy Now</div>
        </div>
      </div>
    </div>
  )
}

export default Card
