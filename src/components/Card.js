import React from 'react'

const Card = ({img, course, author, price}) => {
  return (
    <div className='bg-white shadow-xl rounded-md max-w-sm'>
        <div>
            <img src={img} alt="card" className='w-full'/>
        </div>
        <div className='pl-4 py-3'>
            <h1 className='text-2xl text-bold'>{course}</h1>
            <p className='pt-1 pb-4'>By {author}</p>
            <p className='text-xl'>&#8377; {price}</p>
        </div>
    </div>
  )
}

export default Card