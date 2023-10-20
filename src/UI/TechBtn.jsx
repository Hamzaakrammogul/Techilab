import React from 'react'

const TechBtn = ({title}) => {
  return (
    <button className='bg-dusty w-full text-black font-semilight py-3 px-7 mt-1 md:mx-2 md:mt-5 rounded-full cursor-pointer hover:bg-sky-200 transition duration-300 md:w-auto lg:text-xl'>{title}</button>
  )
}

export default TechBtn