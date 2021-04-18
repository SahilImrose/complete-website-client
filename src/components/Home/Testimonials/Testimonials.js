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
            <div className="col-md-4 text-center"><img style={{height:'100px',width:'100px',borderRadius:'50%'}} src="data:image/jpeg;base64,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" alt=""/><h2>Akash</h2><h6>C.E.O</h6><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam odit ratione suscipit, quam sed!</p></div>
    </div>
        <div style={CARD_STYLE}>
        <div className="col-md-4 text-center"><img style={{height:'100px',width:'100px',borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvMveD1sa9yVU1yHqMtNb8ul8WlyW0WL6-Q&usqp=CAU" alt=""/><h2>Biman</h2><h6>Manager</h6><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laboriosam, autem id omnis recusandae similique.</p></div>
    </div>
        <div style={CARD_STYLE}>
        <div className="col-md-4  text-center"><img style={{height:'100px',width:'100px',borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdU-QD5K5XIpm7spxWCzt5bs043J3rPr2LDw&usqp=CAU" alt=""/><h2>Patal</h2><h6>Web Dev</h6><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium placeat, veritatis sint optio aut ratione.</p></div>
    </div>
    </ReactCardCarousel></div>
        </div>
    );
};

export default Testimonials;













{/* 
        
         */}