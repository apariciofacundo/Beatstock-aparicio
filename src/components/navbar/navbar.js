
import './NavBar.css'
import { CartWidget } from '../cartWidget/cartWidget'

export function NavBar() {
    return(
        <div className='NavBar'>
            <header className='topbar'>
                <p className='logo'>BeatStock</p>
                <nav className='navigation'>
                    <ul className='links'>
                        <li className='link'>
                            <a href=''>Home</a>
                        </li>
                        <li className='link'>
                            <a href=''>Beats</a>
                        </li>
                        <li>
                            <a href=''>Genres</a>
                        </li>
                        <li>
                            <a href=''>Producers</a>
                        </li>
                        <li>
                            <a href=''>Cart</a>
                        </li>
                    </ul>
                </nav>
                <CartWidget/>
            </header>
        </div>
    )
}