import '../assets/style/styles.css'
import { NavLink } from 'react-router-dom'
import laptop from '../assets/images/laptop.jpg'
export const Navbar = () =>{
    return(
        <nav>
            <img className='logo' src={laptop} alt='img'></img>
            <ul>
                <li>
                    <NavLink className='links' to='/shops'>Shop</NavLink>
                </li>
                <li>
                    <NavLink className='links' to='/locations'>Location</NavLink>
                </li>
            </ul>
        </nav>
    )
}