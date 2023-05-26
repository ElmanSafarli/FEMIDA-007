import React, { useState } from "react";

import Logo from "../assets/navbarLogo.png"
import Search from "../assets/search.png"
import Navlinks from "./Navlinks";
import MobileSidebar from "./MobileNavbar";


const Navbar = () => {

    return(
        <div className="navbar">
            <div className="navabar-content">
                <div className="nav-logo">
                    <img src={Logo} alt="navbar-img" />
                    <p>Femida007</p>
                </div>
                <div className="nav-search">
                    {/* <form action="">
                        <div className="nav-filter-search">
                            <input 
                                type="text" 
                                placeholder="Xəbəri tap"
                                onChange={(event) => setValue(event.target.value)} 
                                />
                            <img src={Search} alt="" />
                        </div>
                    </form> */}
                </div>
                <MobileSidebar/>
            </div>
            <Navlinks/>
                

            <div className="news">
                <div className="news-left">
                    <div className="search-news">
                        {/* <input 
                            type="text" 
                            placeholder="Xəbəri tap"
                            onChange={(event) => setValue(event.target.value)} 
                        />
                        <img src={Search} alt="" /> */}
                    </div>
                    {/* <Slider/>
                    <div className="lastNews-content">
                        {filterNewBlock.map(LastNewsContent)}
                    </div>  */}
                </div>
                {/* <div className="news-right">
                    <LastNewsRight/>
                </div> */}
            </div>
            
        </div>
    )
}

export default Navbar;