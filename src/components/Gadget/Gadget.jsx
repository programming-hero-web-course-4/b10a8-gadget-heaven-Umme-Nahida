import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {
    console.log(gadget)
    const { id, image, price, title } = gadget

    return (
        <div className=''>
            <div className="card bg-base-100 w-76 shadow-sm p-5">
                <figure className='bg-gray-500'>
                    <img className=''
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p> Price:{price}</p>
                    <div className="card-actions justify-start">
                        <Link to={`/gadget/${id}`}> 
                            <button className='cursor-pointer rounded-full border-2 border-purple-600 px-5 py-2 '>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadget;