import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { addToStoredCartList } from '../../utility/addToDatabase';
import { addWishList } from '../../utility/addToWishlitDB';

const ProductDetail = () => {
    const { gadgetId } = useParams()
    const id = parseInt(gadgetId)
    const data = useLoaderData()
    const uniqueGadget = data?.find(gadget => gadget.id === id)
    console.log(uniqueGadget, data, gadgetId,id)
    const { id: detailId, title, image, price, description, specification, availability, rating } = uniqueGadget
    const handleAddToCart= (id)=>{
        //1. what to add or save => like : specific data / gadgetId
        //2. where to added => like : database or localStorage
        //3.what type data as stored : like array,list, collection
        //4. Is the data allready stored in the database? 
        // if not , add to the data to the list
        // if yes , dont add the data
        addToStoredCartList(id)
    }

    const handleWishlist =(id)=>{
        console.log('added wihslist',id)
        addWishList(id)
    }
    return (
        <div>
            <div className='bg-purple-600 p-20 text-center rounded-md text-white'>
                <h2 className='text-2xl font-bold'>Product Details: {gadgetId}</h2>
                <p className='max-w-2/3 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='flex gap-10 items-center justify-center'>
                <div><img src={image} alt="" /></div>
                <div className=' space-y-3'>
                    <h2 className='text-3xl font-bold'>{title}</h2>
                    <p className='text-base font-bold'>Price:{price}</p>
                    <p>IsAvailable:{availability}</p>
                    <p>{description}</p>
                    <div>
                        Specification:
                        <ol>
                            <li>{specification[0]}</li>
                            <li>{specification[1]}</li>
                            <li>{specification[2]}</li>
                        </ol>
                    </div>
                    <div className='space-y-3'>
                        <h3 className='font-bold'>Rating:</h3>
                        <div className='flex items-center gap-3'>
                            <span>
                                <div className="rating text-base">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                                </div>
                            </span>
                            <span className='font-bold'>{rating}</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <button onClick={()=> handleAddToCart(id)} className='btn bg-purple-600 text-white rounded-full'>Add To Cart <span><IoCartOutline /></span></button>
                            <div onClick={()=>handleWishlist(id)} className='cursor-pointer border-1 p-2 rounded-full'>
                                <a><FaRegHeart /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductDetail
