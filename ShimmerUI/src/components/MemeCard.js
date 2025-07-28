import React from 'react'

const MemeCard = (data) => {
    const {title, url, author, previews} = data.data
    console.log(data)
  return (
    <div className='p-4 m-2 border rounded-lg shadow-lg transition-all duration-300 flex gap-4 flex-col' >
        <h2 className='text-red-600 bold'>{title}</h2>
        <img className="w-64 h-64" src={url} alt={title} />
        <p className='bold'>Author: {author}</p>      
    </div>
  )
}

export default MemeCard
