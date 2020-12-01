import React from 'react'
import * as FaIcons from "react-icons/fa";

function Sidebar() {
    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars/>
                </Link>
            </div>
        </>
    )
}

export default Sidebar
