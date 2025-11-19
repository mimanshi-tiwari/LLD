import React, {useEffect, useState} from 'react'

const TextProgressbar = ({ progress }) => {

    return (
    <div className='flex flex-col gap-8 m-20'>
        Progress Bars
        {
            progress.map((prog, index) => (<Progressbar key={index} progress={prog} />))
        }
    </div>
    )

}
const Progressbar = ({ progress }) => {
    const [animatedProgress, setAnimatedProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {setAnimatedProgress(progress)}, 200)
        return () => clearTimeout(timer);
    }, [progress]);
    return (
        <div>
            <div className='border border-black rounded-md overflow-hidden w-[300px]'>
                <div
                    className='bg-green-600 text-white flex text-xs transition ease-in duration-200 justify-end'
                    style={{ transform: `translateX(${animatedProgress-100}%)` }}
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    {progress}%
                </div>
            </div>
        </div>
    )
}

export default TextProgressbar
