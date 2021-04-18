import React from 'react';
import { useForm } from "react-hook-form";
import SideBar from '../Sidebar/Sidebar';


const AddAdmin = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const Admin = {
            email: data.email
        }
        
        const url = `http://localhost:8080/addAdmin`
        console.log(Admin)
        console.log(data)
        fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(Admin) })
            .then(res => console.log("hi", res))
    };
    console.log(watch("example"));
    return (
        <div className="row d-flex mt-1">
            <div className="col-md-3"><SideBar></SideBar></div>
            <form className="col-md-9" onSubmit={handleSubmit(onSubmit)}>
                <input name="email" placeholder="Email" ref={register} />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddAdmin;