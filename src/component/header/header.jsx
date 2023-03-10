import logo from '../../assets/Skillked-logo.png'


function Header() {
    return (
        <div>
            <nav className='flex justify-center align-center bg-primary'>
                <img src={logo} alt="logo" className='w-24  h-24' />
            </nav>
        </div>
    )
}

export default Header;