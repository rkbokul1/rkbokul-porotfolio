import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Input = () => {

    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const onSubmit = data => {

       
        // console.log(data);
        // toast('Message Sent')        
        // reset();
    }


    return (
        <div className='card max-w-lg bg-base-100 shadow-xl p-5'>

            <form onSubmit={handleSubmit(onSubmit)}>

                <label className='label'>
                    <p >Full Name</p>
                </label>
                <input {...register("fullname", { required: 'Full name required'})} className="input input-bordered w-full max-w-md" />
                <p className='text-sm text-red-500'>{errors.fullname?.type === 'required' && errors.fullname.message}</p>

                <label className='label'>
                    <p >Phone</p>
                </label>
                <input {...register("number", { required: 'Phone required', maxLength: 20 })} className="input input-bordered w-full max-w-md" />
                <p className='text-sm text-red-500'>{errors.number?.type === 'required' && errors.fullname.message}</p>

                

                <label className='label'>
                    <p>E-mail</p>
                </label>
                <input {...register("mail", { required: "Email Address required" })} className="input input-bordered w-full max-w-md" />
                <p className='text-sm text-red-500'>{errors.mail?.message}</p>



                <label className='label'>
                    <p>Subject</p>
                </label>
                <input {...register("subject", { required: "Subject required" })} className="input input-bordered w-full max-w-md" />
                <p className='text-sm text-red-500'>{errors.subject?.message}</p>

                <label className='label'>
                    <p >Message</p>
                </label>
                <textarea {...register("message", { required: "Message required" })} className="textarea textarea-bordered h-24 input input-bordered w-full max-w-md" />
                <p className='text-sm text-red-500'>{errors.message?.message}</p>

                <br />
                <input type="submit" className='btn btn-outline hover:bg-secondary mt-5' />
            </form>

        </div>
    );
};

export default Input;