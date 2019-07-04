import React from 'react'

const Menu = (props) => {
    return (
        <div className="pl-4 pt-2 pb-1 pr-4 d-flex justify-content-between roboto">
        <div className="font-weight-bold primary font-size-25 pointer">mojila</div>
        <div className="font-size-16 d-flex justify-content-start pt-1 primary">
            <div className="menu-active mr-5 pointer">Home</div>
            <div className="mr-5 pointer"
                onClick={() => props.toExperience()}>Experiences</div>
            <div className="mr-5 pointer">Services</div>
            <div className="mr-5 pointer">Contact</div>
            <div className="mr-5 pointer">GitHub</div>
        </div>
        </div>
    )
} 

export default Menu