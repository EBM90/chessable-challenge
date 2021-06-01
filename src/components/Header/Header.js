import React from 'react'

import useWindowDimensions from '../../getWindow'

import './Header.css'

export default function Header() {

    const { width } = useWindowDimensions();

    const checkWidth = () =>{
        if(width > 500){
            return <img src='./logo.png' alt='chessableLogo'/>
        } else {
            return <i className="fas fa-bars" style={{width: '50%'}}></i>
        }
    }
    return (
        <nav className='header'>
            <div className='logo'>
            {checkWidth()}
            </div>
            <div className='sections'>
                <ul className='links'>
                    <button className="btn login">Sign up</button>
                    <button className="btn signup">Log in</button>
                    <i className="fas fa-shopping-cart"></i>
                </ul>
            </div>
        </nav>
    )
}
