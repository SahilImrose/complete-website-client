import React, { useEffect, useState } from 'react';
import BookingModals from '../BookingModals/BookingModals'
import './BookingCardDetail.css'

const BookingCardDetail = ({date}) => {
    console.log(date)
    const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8080/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="row BookingCardDetail">
            {services.map(service => <div style={{boxShadow:'10px 10px 30px gray', width:'300px'}} className="col-md-4"><img style={{height:'100px'}} src={service.imageURL} alt=""/><h5>{service.servicesName}</h5><h6>${service.price}</h6><button className="btn btn-primary" onClick={openModal}>Book Now</button> <BookingModals date={date} closeModal={closeModal} modalIsOpen={modalIsOpen} service={service}></BookingModals></div>)}

        </div>
    );
};

export default BookingCardDetail;