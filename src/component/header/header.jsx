import React from 'react'
import logo from '../../assets/Skillked-logo.png'
import text from '../../assets/Skillkedin-whitetext.png'


function Header () {
    return (
        <div>
            <nav className='flex w-auto justify-center align-center bg-primary sm: h-40 w-auto justify-between'>
                <img src={logo} alt="logo" className= 'w-auto h-24 md:w-auto h-36 my-auto'/>
                <img src={text} alt="text" className= 'hidden sm:flex h-40'/>
                <button className='hidden md:flex mr-4 my-auto bg-white font-semibold hover:text-primary py-2 px-4 border border-transparent rounded '>HOME</button>
            </nav>
        </div>    
    )
}

export default Header