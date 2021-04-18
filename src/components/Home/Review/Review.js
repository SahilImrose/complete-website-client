import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './Review.css'

const Review = () => {
    const [review, setReview] = useState([])
    useEffect(()=>{
        fetch('https://mighty-lake-67206.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        <div className="container text-center">
        <div className="text-center"><h1><span style={{color:'blue'}}>Company</span> <span style={{color: 'hotpink'}}>Review</span></h1></div>
        
        <div className="row review">
            {review.map(review => <div style={{backgroundColor:'#f9f9f9', width:'300px',padding:'5px', borderRadius:'10px', boxShadow:'5px 5px 30px'}} className="col-md-4"><img style={{height: '100px'}} src={review.imageURL} alt="" /><h5>{review.Name}</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, provident perspiciatis voluptates praesentium soluta explicabo aperiam voluptas a dolor maiores.</p><div style={{color:'gold'}}><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div> </div>)}
        </div>
    </div>
    );
};

export default Review;