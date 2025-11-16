import React, { useEffect, useState, useRef } from 'react'

const Autocomplete = () => {
    const [searchText, setSearchText] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const previousController = useRef(null)
    useEffect(() => {
        // debounce logic
        const timer = setTimeout(fetchData, 100)

        return () => clearTimeout(timer)
    }, [searchText])

    const fetchData = async () => {
        try {
       if(previousController.current) {
            previousController.current.abort()
        }
        const cacheData = JSON.parse(localStorage.getItem('searchCache') || "{}")
        if(cacheData[searchText]) {
            setSuggestions(cacheData[searchText])
            return
        }
        const controller = new AbortController()
        previousController.current = controller
        const signal = controller.signal
        const response = await fetch('https://www.google.com/complete/search?client=firefox&q=' + searchText, { signal})
        const json = await response.json()
        cacheSearch(searchText, json[1])
        setSuggestions(json[1])
        } catch (err) {
            if (err.name === 'AbortError') {
                console.log('Fetch aborted');
            } else {
                console.error('Fetch error:', err);
            }
        }
 
    }

    const cacheSearch = (key, result) => {
        const cacheData = JSON.parse(localStorage.getItem('searchCache') || "{}")
        cacheData[key] = result
        localStorage.setItem('searchCache', JSON.stringify(cacheData))
    }
 
    return (
        <div className='flex flex-col justify-center items-center h-full mt-24'>
            <input type="text" placeholder="Search..." value={searchText} onChange={(e) => setSearchText(e.target.value)} onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} className='border border-b-lime-700 px-2 py-1 w-64' />
            {suggestions.length > 1 && showSuggestions && ( <div className='border border-amber-600 w-64 px-2 py-1 rounded-md shadow-2xl'>
               <ul className='cursor-pointer'>
                    {suggestions.map((suggestions, index) => (
                        <li key={index} className='hover:bg-gray-200 px-1'>{suggestions}</li>
                    ))}
                </ul>
            </div>)}
        </div>
    )
}

export default Autocomplete
