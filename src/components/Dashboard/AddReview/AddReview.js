import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import SideBar from '../Sidebar/Sidebar';


const AddServices = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setImageUrl] = useState()
    const onSubmit = data => {
        const reviewData = {
            Name: data.Name,
            imageURL: imageUrl}
        
        const url = `https://mighty-lake-67206.herokuapp.com/addReview`
        console.log(reviewData)
        console.log(data)
        fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(reviewData) })
            .then(res => console.log("hi", res))
    };
    console.log(watch("example"));
    const handleImageUpload = e => {
        console.log(e.target.files[0])
        const imageData = new FormData()
        imageData.set('key', '3eae4b154fc5343420be1938f03fff72')
        imageData.append('image', e.target.files[0])


        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="row d-flex mt-1">
            <div className="col-md-3"><SideBar></SideBar></div>
            <form className="col-md-9" onSubmit={handleSubmit(onSubmit)}>
                <input name="Name" placeholder="Name" ref={register} />
                <br />
                <input type="file" name="Photo" id="" onChange={handleImageUpload} />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;