import React from "react";
import FooterLogo from "../assets/navbarLogo.png";

const Footer = () => {
    return(
        <div className="footer">
            <div className="blue-footer"></div>
            <div className="footer-logo">
                <img src={FooterLogo} alt="footer-logo-img" />
                <p>Femida007</p>
            </div>
            <div className="footer-text">
                <p>
                    Sonxeber.az Azərbaycanın xəbər saytı, Azərbaycandan ən son xəbərləri
                    yayımlayır. Iqtisadi xeberler, Şou biznes xəbərləri , siyasi xeberler, 
                    kriminal xeberler, idman xeberleri, muharibe xeberleri, maliyye xeberleri, 
                    son xeberler təqdim edən ictimai-sosial saytdır. xeberler bu gun 2022
                </p>
            </div>
        </div>
    );
};

export default Footer;