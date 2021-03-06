import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        { name: "Emergency Car Wash" },
        { name: "  Car Check" },


        { name: "  Car Check" },
    ]
    const ourAddress = [
        { name: "Uttor boridhara bostir ullta pase chaier dokan" }

    ]
    const CarRepair = [
        { name: "Emergency Car Wash" },
        { name: "  Car Check" },


        { name: "  Car Check" },
        { name: "  Car Check" },
        { name: "  Car Check" }
    ]
    const services = [
        { name: "Emergency Car Wash" },
        { name: "  Car Check" },


        { name: "  Car Check" },
        { name: "  Car Check" },
        { name: "  Car Check" }
    ]
    return (
        <footer style={{marginTop:'100px'}} className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={""} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Car Repair" menuItems={CarRepair} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon" icon={faFacebook}/></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGoogle}/></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram}/></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;