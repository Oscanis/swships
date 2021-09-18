import React from 'react'; //React névtér importálás
import navStyles from '../styles/Nav.module.css'; //component-specifikus css
import Link from 'next/link'; //Link importálása a Next-ből a sima <a href...> helyett, automatikus routinggal


export const NavView: React.FC = (): JSX.Element => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                
            </ul>
        </nav>
    )
  }

export default NavView