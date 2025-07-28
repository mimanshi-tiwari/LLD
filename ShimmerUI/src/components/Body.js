import React, { useState, useEffect } from 'react'
import MemeCard from './MemeCard'
import Shimmer from './Shimmer'

const Body = () => {
    const [memes, setMemes] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchMemes = async () => {
        try {
            const response = await fetch('https://meme-api.com/gimme/20')
            const memesResponse = await response.json()
            setMemes(memesResponse.memes)
            setLoading(false)
        } catch (error) {
            console.error('Error fetching memes:', error)
        }
    }

    useEffect(() => {
        fetchMemes()
    }, [])
    return (
        <div className='flex flex-wrap justify-center'>
            {loading && Array.from({ length: 20 }).map((_, index) => <Shimmer key={index} />)}
            {memes && memes.map((meme, index) =>  <MemeCard key={index + meme.ups + meme.title} data={meme} />)}
        </div>
    )
}

export default Body
