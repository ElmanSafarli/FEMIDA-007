import React, {useState} from "react";
import Logo from "../assets/navbarLogo.png"

const MobileSidebar = () => {

    const handleClick = event => {
        const active = document.getElementById("active")
        active.classList.toggle('active');
      };


    return(
        <div className="sidebar" id="sidebar" onClick={handleClick}>
            <div className="menu-group">
                <div  id="menu"></div>
                <div  id="menu"></div>
                <div  id="menu"></div>
            </div>
            
            <div id="active"  className="action-menu">
                <ul>
                    <li><a href="">Sosial</a></li>
                    <li><a href="">İqtisadiyyat</a></li>
                    <li><a href="">Siyasət</a></li>
                    <li><a href="">Hadisə</a></li>
                    <li><a href="">Kriminal</a></li>
                    <li><a href="">Mədəniyyət</a></li>
                    <li><a href="">Şou-biznes</a></li>
                    <li><a href="">İdman</a></li>
                    <li><a href="">Dünyada</a></li>
                </ul>
                <div className="logoSidebar">
                    <img src={Logo} alt="" />
                    <p>Femida007</p>
                </div>
            </div>
        </div>
    )
}

export default MobileSidebar;