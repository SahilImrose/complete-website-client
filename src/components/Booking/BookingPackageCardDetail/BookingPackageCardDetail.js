import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';

const BookingCardDetail = ({ services, date }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div style={{ backgroundColor: 'azure', width: '250px', margin: '10px', paddingTop: '10px', paddingBottom: '10px' }} className="col-md-3">
      <h1>{services.name}</h1>
      <h3>{services.price}</h3>
      <div className="d-flex mt-5"> <i className={services.avilableOne}></i>
        <h5>{services.one}</h5></div>
      <div className="d-flex mt-5"><i className={services.avilableTwo}></i>
        <h5>{services.two}</h5></div>
      <div className="d-flex mt-5"><i className={services.avilableThree}></i>
        <h5>{services.three}</h5></div>
      <div className="d-flex mt-5"><i className={services.avilableFour}></i>
        <h5>{services.four}</h5></div>
      <button className="btn btn-primary" onClick={openModal} >Book Now</button>
      <BookingModal date={date} closeModal={closeModal} modalIsOpen={modalIsOpen} services={services}></BookingModal>
    </div>
  );
};

export default BookingCardDetail;