// import {Link} from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { BiMessageAltAdd } from 'react-icons/bi';

function Footer() {
    return (
        <div>
            <ul className="text-white fixed bottom-0  h-12 bg-secondary w-full flex items-center justify-center">
                <li className="hover:text-primary m-auto"><MdSkipPrevious /></li>
                <li className="hover:text-primary m-auto"><MdSkipNext /></li>
                <li className="hover:text-primary m-auto"><FaHome /></li>
                <li className="hover:text-primary m-auto"><BiMessageAltAdd /></li>
                <li className="hover:text-primary m-auto"><BsThreeDots /></li>
                {/* <li className=""><Link to="" className="icon"><FaUserAlt/></Link></li> */}
            </ul>
        </div>
    )
}

export default Footer;