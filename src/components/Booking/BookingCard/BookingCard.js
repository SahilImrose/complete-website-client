import React, { useEffect, useState } from 'react';
import BookingCardDetail from '../BookingCardDetail/BookingCardDetail';
import BookingPackageCardDetail from '../BookingPackageCardDetail/BookingPackageCardDetail';
const BookingCard = ({ date }) => {
  console.log(date)
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://mighty-lake-67206.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div><div className="container">
        <h5 style={{marginTop:'50px'}}>{date.toDateString()}</h5>
        <BookingCardDetail date={date}></BookingCardDetail>
        <div className="row"><h1 className="text-center mt-5">Our Packages</h1>{services.map(services => <BookingPackageCardDetail date={date} services={services}></BookingPackageCardDetail>)}</div>
    </div></div>
    );
};

export default BookingCard;