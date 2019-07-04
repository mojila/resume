import React, { useEffect, useRef } from 'react'
import fly from '../images/fly.png'
import start from '../images/start.svg'
import car from '../images/car.svg'

const Experience = () => {
    const experienceRef = useRef(null)
    const carRef = useRef(null)
    const roadRef = useRef(null)
    
    // const toHome = () => 

    // const toTechnologyStack = () => window.scrollTo({
    //     top: experienceRef.current.scrollHeight,
    //     behavior: 'smooth'
    // })

    const carForward = () => {
        let adding = Number(carRef.current.style.paddingLeft.replace('px','')) + 20
        if (adding < 725) {
            carRef.current.style.paddingLeft = `${adding}px`
        } else {
            // carRef.current.style.paddingLeft = `0px`
        }
    }

    const carBackward = () => {
        let reduce = Number(carRef.current.style.paddingLeft.replace('px','')) - 20
        if (reduce > 0) {
            carRef.current.style.paddingLeft = `${reduce}px`;                    
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }
    
    useEffect(() => {
        experienceRef.current.onwheel = (e) => {
            e.preventDefault()

            if (e.deltaY >= 3) {
                carForward()
            } else {
                carBackward()
            }
        }
    }, [])

    return (
        <div ref={experienceRef} className="w-100 vh-100">
            <div className="d-flex justify-content-end">
                <div className="h1 mr-4 mt-2 primary">My Experiences</div>
            </div>
            <div className="d-flex m-4">
                <div>
                    <img height={240} src={fly} alt="fly"/>
                </div>
                <div className="pt-1 mt-5">
                    <img height={128} src={start} alt="start"/>
                </div>
                <div className="flex-fill ml-4 pt-5 mt-5">
                    <div className="w-100">
                        <img ref={carRef} height={64} src={car} alt="car"/>
                    </div>
                    <div className="road"></div>
                </div>
            </div>
            <div className="d-flex m-4">
                <div className="flex-fill ml-4 pt-5 mt-5">
                    <div>
                        {/* <img height={64} src={car} alt="car"/> */}
                    </div>
                    <div ref={roadRef} className="road"></div>
                </div>
            </div>
        </div>
    )
}

export default Experience