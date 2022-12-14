import { Link } from 'react-router-dom'
import { useState } from 'react'
import './assets/css/Header.css'
import logo1 from './assets/images/hagency-white-logo.png'
import { HiBars3BottomRight } from "react-icons/hi2";

function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <div className="header">
            <div className="header_inner">
                <div className="logo">
                    <img src={logo1} alt="" />
                </div>

                <div className={isNavExpanded ? 'sm_menu': 'menu'}>
                    <ul className="menu_links">
                        <li className="menu_item">Home</li>
                        <li className="menu_item">About</li>
                        <li className="menu_item">Portfolio</li>
                        <li className="menu_item">Blog</li>
                        <li className="menu_item button"><button>Let's Talk</button></li>
                        <li className="menu_item">hh</li>
                    </ul>
                </div>

                <div className="sm_cntrl">
                    <HiBars3BottomRight className='cntrl' onClick={()=>{
                        setIsNavExpanded(!isNavExpanded)
                    }}/>
                </div>
            </div>
        </div>
    )
}
export default Header