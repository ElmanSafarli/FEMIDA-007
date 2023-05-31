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
                    Xarici və ölkə mediyasından informasiyalar göturülə bilər
                </p>
            </div>
        </div>
    );
};

export default Footer;
