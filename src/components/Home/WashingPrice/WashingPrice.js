import React from 'react';
import car1 from '../../../images/car_01.png'
import car2 from '../../../images/car_03.png'
import car3 from '../../../images/car_02.png'
import car4 from '../../../images/car_04.png'
import { Link } from 'react-router-dom';

const WashingPrice = () => {
    return (
        <div className="text-center mt-5">
            <h6>Washing Price</h6>
            <h1>Choose Your Plan</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officia accusantium voluptatibus eum dicta aliquam error obcaecati omnis nam. Architecto quae neque ipsum autem amet nostrum iste dolore temporibus! Voluptatibus.</p>
            <div className="row d-flex align-items-center m-5">
                <div className="col-md-3"><img style={{ height: '100px' }} src={car1} alt="" /><h4>Small Sedan</h4></div>
                <div className="col-md-3"><img style={{ height: '100px' }} src={car2} alt="" /><h5>Pickup</h5></div>
                <div className="col-md-3"><img style={{ height: '100px' }} src={car3} alt="" /><h5>Sport utility vehicle(SUV)</h5></div>
                <div className="col-md-3"><img style={{ height: '100px' }} src={car4} alt="" /><h5>Minibus</h5></div>
            </div>
            <div className="row mt-5">
                <div className="col-md-3">
                    <div style={{margin:'20px', backgroundColor:'azure'}}><h4>Express Washing</h4>
                    <h1>$12.99</h1>
                    <i className="fas fa-check"></i><p>Exterior Washing</p>
                    <i className="fas fa-times"></i>
                    <p>Vacuum Cleaning</p>
                    <i className="fas fa-times"></i>
                    <p>Interior Wet Cleaning</p>
                    <i className="fas fa-times"></i>
                    <p>Window Wiping</p>
                    <Link to="/booking"><button className="btn btn-primary">Order Now</button></Link></div>
                </div>
                <div className="col-md-3">
                    <div style={{margin:'20px', backgroundColor:'azure'}}><h4>Basic Cleaning</h4>
                    <h1>$30.99</h1>
                    <i className="fas fa-check"></i><p>Exterior Washing</p>
                    <i className="fas fa-check"></i><p>Vacuum Cleaning</p>
                    <i className="fas fa-times"></i>
                    <p>Interior Wet Cleaning</p>
                    <i className="fas fa-times"></i>
                    <p>Window Wiping</p>
                    <Link to="/booking"><button className="btn btn-primary">Order Now</button></Link></div>
                </div>
                <div className="col-md-3">
                    <div style={{margin:'20px', backgroundColor:'azure'}}><h4>Premium Services</h4>
                    <h1>$36.99</h1>
                    <i className="fas fa-check"></i><p>Exterior Washing</p>
                    <i className="fas fa-check"></i><p>Vacuum Cleaning</p>
                    <i className="fas fa-check"></i><p>Interior Wet Cleaning</p>
                    <i className="fas fa-times"></i>
                    <p>Window Wiping</p>
                    <Link to="/booking"><button className="btn btn-primary">Order Now</button></Link></div>
                </div>
                <div className="col-md-3">
                    <div style={{margin:'20px', backgroundColor:'azure'}}><h4>Full Complex</h4>
                    <h1>$59.99</h1>
                    <i className="fas fa-check"></i><p>Exterior Washing</p>
                    <i className="fas fa-check"></i><p>Vacuum Cleaning</p>
                    <i className="fas fa-check"></i><p>Interior Wet Cleaning</p>
                    <i className="fas fa-check"></i><p> Window Wiping</p>
                    <Link to="/booking"><button className="btn btn-primary">Order Now</button></Link></div>
                </div>
            </div>
        </div>
    );
};

export default WashingPrice;