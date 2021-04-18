import React, { useState } from 'react';
import Calendar from 'react-calendar';
import img from '../../../images/Captumre.PNG'
import 'react-calendar/dist/Calendar.css';
import BookingCard from '../BookingCard/BookingCard';
import './BookingHeaderMain.css'

const BookingHeaderMain = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const onChange = date => {
        setSelectedDate(date)
    }
    return (
        <main style={{height:'400px'}} className="row text-center">
            <div id="bookingHeaderMain"><div style={{color:''}} className="col-md-6 offset-1"><Calendar onChange={onChange} value={new Date()} /></div>
            <div className="col-md-4"><img id="brand-image" src={img} alt=""/></div></div>
            <div><BookingCard date={selectedDate} ></BookingCard></div>
        </main>
    );
};

export default BookingHeaderMain;