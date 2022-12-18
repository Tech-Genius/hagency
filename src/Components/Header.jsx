import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './assets/css/Header.css'
import logo1 from './assets/images/hagency-white-logo.png'
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaSearch, FaRegTimesCircle } from "react-icons/fa";

function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const close = () => {
        setIsNavExpanded(false);
      };
    useEffect(() => {
        let header = document.getElementById("header");
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            header.style.background = "linear-gradient(#272727,#211E1E )"
          } else {
            header.style.background = "transparent"
          }
        })
      })
      
    return (
        <div id="header">
            <div className="header_inner">
                <div className="logo">
                    <img src={logo1} alt="" />
                </div>

                <div className={isNavExpanded ? 'sm_menu': 'menu'}>
                    <ul className="menu_links">
                        <li onClick={close} className="menu_item"><Link to={'/'} className="router_link">Home</Link></li>
                        <li onClick={close} className="menu_item"><Link to={'/about'} className="router_link">About </Link></li>
                        <li onClick={close} className="menu_item"><Link to={'/portfolio'} className="router_link">Portfolio </Link></li>
                        <li onClick={close} className="menu_item"><Link to={'/about'} className="router_link">Blog </Link></li>
                        <li onClick={close} className="menu_item button"><Link to={'/about'} className="router_link"><button>Let's Talk</button> </Link></li>
                        <li onClick={close} className="menu_item"><Link to={'/about'} className="router_link"><FaSearch/> </Link></li>
                    </ul>
                </div>

                <div className="sm_cntrl">
                {!isNavExpanded ? 
                    <HiBars3BottomRight className='cntrl' onClick={()=>
                        setIsNavExpanded(!isNavExpanded)
                    }/> :    <FaRegTimesCircle className='cntrl' onClick={()=>
                        setIsNavExpanded(!isNavExpanded)
                    }/>
                }
                </div>
            </div>
        </div>
    )
}
export default Header