import React, { useState, useRef, useEffect } from 'react'


const OTP_LENGTH = 5
const Otp = () => {
    const [inputArr, setInputArr] = useState(new Array(OTP_LENGTH).fill(""))
    const refArr = useRef([])

    useEffect(() =>{
        refArr.current?.[0]?.focus()
    }, [])
    
    const handleOnChange = (value, index) => {
        if (isNaN(value)) return
        const newVal = value.trim()
        const newInputArr = [...inputArr]
        newInputArr[index] = newVal.slice(-1)
        setInputArr(newInputArr)
        newVal && refArr.current[index+1]?.focus()
    }

    const handleKeyUp = (e, index) => {
        if(!e.target.value && e.key === "Backspace") {
            refArr.current[index-1]?.focus()
        }
    }
    return (
        <div className='flex flex-col w-full items-center p-8 gap-4'>
            <div>Validate OPT</div>
            <div className='flex gap-1'>
            {Array.from({ length: OTP_LENGTH }).map((_, index) => (
                <input 
                    className="border border-blue-950 w-24 rounded-md px-2 py-2.5" 
                    key={index} 
                    value={inputArr[index]} 
                    onChange={(e) => handleOnChange(e.target.value, index)} 
                    ref={(input) => (refArr.current[index] = input)}
                    onKeyUp={(e) => handleKeyUp(e, index)}
                />
            ))}
            </div>
        </div>
    )
}

export default Otp
