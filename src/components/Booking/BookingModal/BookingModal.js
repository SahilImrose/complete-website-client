import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import ProcessPayment, { PaymentContext } from '../ProcessPayment/ProcessPayment';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};


const BookingModal = ({ closeModal, modalIsOpen, services, date }) => {
  const handleClick = () => {
    const form = document.getElementById("form").classList.add('d-none');
    const payment = document.getElementById("payment").classList.remove('d-none');
  }
  const { register, handleSubmit, watch, errors } = useForm();
  const [servicesData, setServicesData] = useState(null)
  const onSubmit = data => {
    setServicesData(data)
  };
  const handlePayment = paymentId => {
    const orderDetails = {email:servicesData.email, services:services.name,shipment: servicesData, paymentId, orderTime: new Date() };
    console.log(orderDetails)
    
    fetch('http://localhost:8080/addOrder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(success => {
        if (success) {
          closeModal()
        }
      })
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 className="text-center text-brand">{services.name}</h2>
        <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
        <div id="form" className="">
          <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
              {errors.name && <span className="text-danger">This field is required</span>}

            </div>
            <div className="form-group">
              <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
              {errors.phone && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group">
              <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
              {errors.email && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group row">
              <div className="col-4">

                <select className="form-control" name="vehicle" ref={register({ required: true })} >
                  <option disabled={false} value="Not set">Select vehicle type</option>
                  <option value="SmallSedan">Small Sedan</option>
                  <option value="Pickup">Pickup</option>
                  <option value="SportUtilityVehicle">Sport utility vehicle(SUV)</option>
                  <option value="Minibus">Minibus</option>
                </select>
                {errors.gender && <span className="text-danger">This field is required</span>}
              </div>
              <div className="col-8">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="describe about your car"></textarea>
                {errors.description && <span className="text-danger">This field is required</span>}
              </div>
            </div>
            <input onClick={handleClick} type="submit" name="" id="" />
          </form></div>
        <div className="d-none" id="payment"><ProcessPayment handlePayment={handlePayment}></ProcessPayment></div>
      </Modal>
    </div>
  );
};

export default BookingModal;