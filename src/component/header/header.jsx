import logo from '../../assets/logos/Skillked-logo.png';
import { Link } from "react-router-dom";



function Header() {
    return (
        <div>
            <nav className='flex justify-center md:justify-between items-center bg-primary'>

                <Link to="/">
                    <img src={logo} alt="logo" className='w-24  h-24 hover:rotate-[360deg] transition-all' />
                </Link>
                <Link to="/" className='hidden md:block text-center mr-8 py-1 min-w-[100px] bg-neutral hover:bg-secondary hover:border-2 hover:text-neutral hover:scale-[1.1] transition-all'>Home</Link>            </nav>
        </div>
    )
}

export default Header;