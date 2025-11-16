import React, { useState, useEffect } from 'react'
import MemeCard from './MemeCard'
import Shimmer from './Shimmer'

const Body = () => {
    const [memes, setMemes] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchMemes = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://meme-api.com/gimme/20')
            const memesResponse = await response.json()
            setMemes((memes) => [...memes, ...memesResponse.memes])
            setLoading(false)
        } catch (error) {
            console.error('Error fetching memes:', error)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        fetchMemes()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
            fetchMemes()
        }
    } 
    return (
        <div className='flex flex-wrap justify-center'>
            {memes.length > 1 && memes.map((meme, index) =>  <MemeCard key={index + meme.ups + meme.title} data={meme} />)}
            {loading && Array.from({ length: 5 }).map((_, index) => <Shimmer key={index} />)}
        </div>
    )
}

export default Body
