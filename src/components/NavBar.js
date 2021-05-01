import React from 'react'
import {ReactComponent as LogoImage} from "../assets/logo.svg";
import {useState, useEffect} from 'react'

import { Link } from "react-router-dom";

function NavBar() {

    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setHamburgerVisible(true);
        }
        else {
            setHamburgerVisible(false);
        }
    };

    const [hamburgerVisible, setHamburgerVisible] = useState(false);

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setHamburgerVisible(true);
        }
    }, [])


    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })
    

    return (
        <React.Fragment>
            <header>
                <div className="container flex">
                    <Logo></Logo>
                    { hamburgerVisible ? <Hamburger />  : <Menu orientation="flex" /> }
                </div>
            </header>
        </React.Fragment>
    );
}

function Logo() {
    return (
        <Link to={"/"}>
            <div className="logo-wrapper flex">
                <LogoImage />
                <h1 className="logo-text">plugNchug</h1>
            </div>
        </Link>
    );
}

function Menu(props) {
    const flexClass = props.orientation;
    return (
        <React.Fragment>
            <ul className={`menu ${flexClass}`}>
                <Link to="/"><li className="menu-item">Home</li></Link>
                <Link to="/courses"><li className="menu-item">Courses</li></Link>
                <Link to="/contact-us"><li className="menu-item">Contact Us</li></Link>
            </ul>
        </React.Fragment>
    );
}

function Hamburger () {

    const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState(false);

    const hamburgerClickHandler = (e) => {
        setHamburgerMenuVisible(!hamburgerMenuVisible);
    }

    return (
        <React.Fragment>
            <div className="hamburger-wrapper" onClick={(e) => {hamburgerClickHandler(e)}}>
                <div className="hamburger flex-column">
                    <div className="bar bar1"></div>
                    <div className="bar bar2"></div>
                    <div className="bar bar3"></div>
                </div>
                {hamburgerMenuVisible && <Menu orientation="flex-column" />}
            </div>
           
        </React.Fragment>    
    )
}

export default NavBar
