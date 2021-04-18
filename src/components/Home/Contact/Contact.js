import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div style={{backgroundColor:'gray'}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-center text-center"><div className="w-50"><h1 style={{color:'#fff'}}>Contact us</h1><br/><br/><br/><br/><br/>
                    <div className="form-group"><input placeholder="Email" {...register("example")} />
                        <input className="m-5" placeholder="Phone" {...register("exampleRequired", { required: true })} /></div>
                        <br/><br/><br/>
                    <textarea placeholder="What You want to say us" className="form-control mb-3" {...register("exampleRequired", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" />
                </div></div>
            </form>
        </div>
    );
};

export default Contact;