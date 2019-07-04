import React, { useEffect, useRef } from 'react'
import ellipse from '../images/ellipse.svg'
import superhero from '../images/superhero.svg'
import person from '../images/person.png'
import phone from '../images/phone.png'
import email from '../images/email.png'
import marker from '../images/marker.png'
import GitHubButton from 'react-github-btn'
import Menu from './Menu';

const Home = () => {
    const homeRef = useRef(null)

    useEffect(() => {
        homeRef.current.onwheel = (e) => {
            if (e.deltaY >= 3) {
                window.scrollTo({
                    top: homeRef.current.scrollHeight,
                    behavior: 'smooth'
                })
            }
        }
    }, [])

    return (<div className="w-100 vh-100" ref={homeRef}>
        <Menu/>
        <img alt="ellipse" src={ellipse} className="ellipse"/>
        <div className="container d-flex justify-content-between mt-5">
            <div className="pt-5 pl-5">
                <div className="font-weight-bold primary pt-5">Hello, I'm</div>
                <div className="pt-5">
                <div className="font-weight-bold primary font-size-100">MOJILA</div>
                <div className="font-weight-bold primary font-size-100 title-shadow">MOJILA</div>
                </div>
                <div className="text-uppercase primary font-weight-bold description">
                    happy working as frontend developer
                </div>
                <div className="pt-2">
                    <GitHubButton href="https://github.com/mojila" data-size="large" data-show-count="true" aria-label="Follow @mojila on GitHub">Follow @mojila</GitHubButton>
                </div>
            </div>
            <div className="rotate">
                <img className="superhero-animation" height="440px" src={superhero} alt="superhero"/>
            </div>
        </div>
        <div className="p-2 pt-3 pb-3 shadow border rounded m-2 ml-5 mr-5 d-flex justify-content-center">
            <div className="mr-5">
                <img height={24} src={person} alt="person"/>
                <span className="mt-1 ml-2 text-primary">Moch. Aji Laksono</span>
            </div>
            <div className="mr-5">
                <img height={24} src={phone} alt="phone"
                    className="phone-animation"/>
                <span className="mt-1 ml-2 text-primary">+62821-2040-2431</span>
            </div>
            <div className="mr-5">
                <img height={24} src={email} alt="email"/>
                <span className="mt-1 ml-2 text-primary">me.mojila@gmail.com</span>
            </div>
            <div>
                <img height={24} src={marker} alt="place"/>
                <span className="mt-1 ml-2 text-primary">Indonesia</span>
            </div>
        </div>
  </div>)
}

export default Home