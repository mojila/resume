import React, { useEffect, useRef } from 'react'
import fly from '../images/fly.png'
import start from '../images/start.svg'
import car from '../images/car.svg'

const Experience = () => {
    const experienceRef = useRef(null)
    const carRef = useRef(null)
    const car2Ref = useRef(null)
    const roadRef = useRef(null)

    const carForward = () => {
        let adding = Number(carRef.current.style.paddingLeft.replace('px','')) + 24
        if (adding < 768) {
            carRef.current.style.paddingLeft = `${adding}px`
        } else {
            let adding2 = Number(car2Ref.current.style.paddingLeft.replace('px','')) + 24
            if (adding2 < 1024) {
                car2Ref.current.style.paddingLeft = `${adding2}px`
            }
        }
    }

    const carBackward = () => {
        let reduce = Number(carRef.current.style.paddingLeft.replace('px','')) - 24
        if (reduce > 0) {
            carRef.current.style.paddingLeft = `${reduce}px`;
        } else {
            carRef.current.style.paddingLeft = `0px`;

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
                        <img ref={car2Ref} height={64} src={car} alt="car"/>
                    </div>
                    <div ref={roadRef} className="road"></div>
                </div>
            </div>
        </div>
    )
}

export default Experience