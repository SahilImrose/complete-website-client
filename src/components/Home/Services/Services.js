import React from 'react';
import wash from '../../../images/210-2102653_car-wash-picture-transparent-download-png-techflourish-car.png'
import Safety from '../../../images/Capturfe.PNG'
import Modern from '../../../images/Cdapture.PNG'
import Cleaning from '../../../images/Capdture.PNG'
import image from '../../../images/df.PNG'

const Services = () => {
    return (
        <div className="container text-center mt-5">
            <div className="row mt-5">
                <div className="col-md-7"><h1>Professional washing <br /> and cleaning of your car</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vitae saepe totam, iure voluptatum vero. Similique dignissimos ratione repudiandae magni!</p><h5><b>Call for book: <span style={{ color: '#E6351E' }}>8-800-10-500</span></b></h5><button className="btn btn-danger">Read more</button></div>
                <div className="col-md-5"><img src={image} alt=""/></div>
            </div>
            <div className="row d-flex align-items-center mt-5">
                <div className="col-md-3"><img style={{ height: '100px' }} src={wash} alt="" /><h4>Contactless Washing</h4></div>
                <div className="col-md-3"><img style={{ height: '100px' }} src={Safety} alt="" /><h5>Safety Materials</h5></div>
                <div className="col-md-3"><img style={{ height: '100px' }} src={Modern} alt="" /><h5>Modern Equipment</h5></div>
                <div className="col-md-3"><img style={{ height: '100px' }} src={Cleaning} alt="" /><h5>Extensive Cleaning</h5></div>
            </div>
        </div>
    );
};

export default Services;