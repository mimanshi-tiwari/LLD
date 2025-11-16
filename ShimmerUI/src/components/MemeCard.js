import React from 'react'

const MemeCard = (data) => {
    const {title, url, author} = data.data
  return (
    <div className='p-4 m-2 border rounded-lg shadow-lg transition-all duration-300 flex gap-4 flex-col w-56' >
        <h2 className='text-red-600 bold text-sm'>{title}</h2>
        <img className="w-48 h-48" src={url} alt={title} />
        <p className='bold text-sm'>Author: {author}</p>      
    </div>
  )
}

export default MemeCard
