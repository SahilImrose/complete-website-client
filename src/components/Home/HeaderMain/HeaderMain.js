import React from 'react';
import img from '../../../images/Captumre.PNG'

const HeaderMain = () => {
    return (
        <main style={{height:'400px'}} className="row text-center">
            <div style={{color:''}} className="col-md-6 offset-1"><h1>Your Car's <br/> New Shine Starts Here</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic cumque labore ut aspernatur temporibus.</p><button className="btn btn-danger">Read more</button></div>
            <div className="col-md-4"><img id="brand-image" src={img} alt=""/></div>
        </main>
    );
};

export default HeaderMain;