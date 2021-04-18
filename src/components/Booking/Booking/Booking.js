import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import BookingHeader from '../BookingHeader/BookingHeader';
import './Booking.css'

const Booking = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div id="BookingHeader"><BookingHeader></BookingHeader></div>
            <Footer></Footer>
        </div>
    );
};

export default Booking;