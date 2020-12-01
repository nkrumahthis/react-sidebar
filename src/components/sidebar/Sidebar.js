import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import "./Sidebar.css"
import { IconContext } from 'react-icons'


function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = (e) => {
        e.preventDefault();
        setShowSidebar(!showSidebar);
    }

    return (
        <>
        <IconContext.Provider value={{color: '#ffffff'}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={toggleSidebar}/>
                </Link>
            </div>
            <nav className={showSidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={toggleSidebar}>
                    <li className="navbar-toggle">
                        <Link className="menu-bars" to ="#">
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index)=>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar
