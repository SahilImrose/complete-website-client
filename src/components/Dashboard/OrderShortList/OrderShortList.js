import React from 'react';

const AppointmentShortList = ({ order }) => {
    return (
        <div>
            <div className="text-center">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}> <p> {order.shipment.name}</p>
                <p>  {order.shipment.phone}</p>
                <p> {order.shipment.email}</p>
                <p> {order.services}</p>
            </div></div>
        </div>
    );
};

export default AppointmentShortList;