import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import Orders from '../Orders/Orders';
import AdminFilter from '../AdminFilter/AdminFilter';
import Navbar from '../../Shared/Navbar/Navbar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}

const Dashboard = () => {
    return (
        <section>
            <Navbar></Navbar>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
                    <Orders></Orders>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;