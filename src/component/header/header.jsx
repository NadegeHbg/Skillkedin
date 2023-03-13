import React from 'react'
import logo from '../../assets/Skillked-logo.png'


function Header() {
    return (
        <div>
            <nav className='flex w-auto justify-center align-center bg-primary sm: h-40'>
                <img src={logo} alt="logo" className= 'w-auto mx-auto h-24 md:w-auto h-36 my-auto'/>
                <img src={text} alt="text" className= 'hidden sm:flex h-20 my-auto mx-auto'/>
                <button className='hidden sm:flex my-auto mx-auto bg-white font-semibold hover:text-primary py-2 px-4 border border-transparent rounded '>HOME </button>
                                
            </nav>
        </div>
    )
}

export default Header;