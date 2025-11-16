import React from 'react'

const Shimmer = () => {
  return (
        <div className='p-4 m-2 border rounded-lg shadow-lg transition-all duration-300 flex gap-4 flex-col w-56' >
        <h2 className='bg-gray-300 h-4'></h2>
        <div className="w-48 h-48 bg-gray-300"></div>
        <p className='h-4 bg-gray-300 w-full'></p>
    </div>
  )
}

export default Shimmer
