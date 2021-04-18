import React from 'react';
import ReactCardCarousel from 'react-card-carousel';
import './Testimonials.css'

const CARD_STYLE = {
    height: '500px',
    width: '300px',
    paddingTop: '10%',
    paddingBottom: '50%',
    paddingLeft: '25%',
    paddingRight: '50%',
    backgroundColor: '#52C0F5',
    color: '#FFF',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '10px',


}

const Testimonials = () => {
    return (
        <div style={{marginBottom:'700px'}}>
            <h1 className="text-center m-5">Testimonial</h1>
            <h1 className="m-5 text-center">What Our Client Says</h1>
            <div className="testimonial"><ReactCardCarousel autoplay={true} autoplay_speed={3000}>
        <div style={CARD_STYLE}>
            <div className="col-md-4 text-center"><img style={{height:'100px',width:'100px',borderRadius:'50%'}} src="https://i.ibb.co/ZXHTsZ3/132437325-236736317827464-2471684975240731696-n.jpg" alt=""/><h2>Sahil</h2><h6>Owner</h6><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam odit ratione suscipit, quam sed!</p></div>
    </div>
        <div style={CARD_STYLE}>
        <div className="col-md-4 text-center"><img style={{height:'100px',width:'100px',borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvMveD1sa9yVU1yHqMtNb8ul8WlyW0WL6-Q&usqp=CAU" alt=""/><h2>Biman</h2><h6>Manager</h6><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laboriosam, autem id omnis recusandae similique.</p></div>
    </div>
        <div style={CARD_STYLE}>
        <div className="col-md-4  text-center"><img style={{height:'100px',width:'100px',borderRadius:'50%'}} src="https://i.ibb.co/ZXHTsZ3/132437325-236736317827464-2471684975240731696-n.jpg" alt=""/><h2>Sahil</h2><h6>Web Dev</h6><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium placeat, veritatis sint optio aut ratione.</p></div>
    </div>
    </ReactCardCarousel></div>
        </div>
    );
};

export default Testimonials;













{/* 
        
         */}