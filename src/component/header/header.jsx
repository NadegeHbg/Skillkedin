import logo from '../../assets/logos/Skillked-logo.png';
import { Link } from "react-router-dom";

import text from '../../assets/logos/Skillkedin-whitetext.png'


function Header() {
    return (
        <div>
            <nav className='bg-primary'>
                <div className='container mx-auto flex justify-between items-center'>
                    <Link to="/">
                        <img src={logo} alt="logo" className='w-24  h-24 hover:rotate-[360deg] transition-all duration-500 hover:scale-[1.5] motion-reduce:transition-none' />
                    </Link>
                    <img src={text} alt="text" className='hidden sm:flex h-20' />
                    <Link className='hidden sm:flex bg-white font-semibold hover:text-primary py-2 px-4 border border-transparent rounded '>HOME </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header