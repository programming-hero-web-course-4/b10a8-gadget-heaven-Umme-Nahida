import React from 'react';
import { RxCrossCircled } from "react-icons/rx";

const Cart = ({cart}) => {
    console.log(cart)
    const {id,title,image,price,description} = cart;

    const handleDelete=(id)=>{
        console.log(id)
    }
    return (
        <div className=''>
             <div className='flex items-center justify-evenly p-10 gap-5 bg-white shadow-2xl'>
                <img src={image} className='size-40' alt="" />
                <div>
                    <h1>{title}</h1>
                    <p>{description} </p>
                    <p>Price: {price} </p>
                </div>
                <button onClick={()=>handleDelete(id)} className='text-2xl'>
                     <RxCrossCircled></RxCrossCircled>
                </button>
            </div>
        </div>
    );
};

export default Cart;