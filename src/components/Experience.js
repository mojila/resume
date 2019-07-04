import React, { useEffect, useRef } from 'react'

const Experience = () => {
    const experienceRef = useRef(null)
    
    useEffect(() => {
        experienceRef.current.onwheel = (e) => {
            if (e.deltaY >= 3) {
                window.scrollTo({
                    top: experienceRef.current.scrollHeight,
                    behavior: 'smooth'
                })
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }
        }
    }, [])

    return (
        <div ref={experienceRef} className="w-100 vh-100">
            adaw
        </div>
    )
}

export default Experience