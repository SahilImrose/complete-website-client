import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import OrderShortList from '../OrderShortList/OrderShortList'

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8080/orders',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email:loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            <h1 className="text-center">Orders</h1>
            {orders.map(order => <OrderShortList order={order}></OrderShortList> )}
        </div>
    );
};

export default Orders;