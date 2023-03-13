import logo from '../../assets/logos/Skillked-logo.png';
import { Link } from "react-router-dom";



function Header() {
    return (
        <div>
            <nav className=' bg-primary'>
                <div className='container mx-auto flex justify-center md:justify-between items-center'>
                    <Link to="/">
                        <img src={logo} alt="logo" className='w-24  h-24 hover:rotate-[360deg] transition-all duration-500 hover:scale-[1.5] motion-reduce:transition-none' />
                    </Link>
                    <Link to="/" className='hidden md:block text-center mr-8 py-1 min-w-[100px] bg-neutral hover:bg-secondary hover:border-2 hover:text-neutral hover:scale-[1.1] transition-all'>Home</Link>
                </div>
            </nav>
        </div>
    )
}

export default Header;