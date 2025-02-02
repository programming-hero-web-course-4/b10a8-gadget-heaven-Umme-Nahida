import React from 'react';
import WishCard from '../WishCard/WishCard';

const Wishlists = ({wishList}) => {
    console.log(wishList)
    return (
        <div className="my-10">
        <h1 className='text-xl md:text-2xl'>Wish List: </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 items-end justify-center'>
           {
            wishList?.map(wish=><WishCard key={wish?.id}  wish={wish}></WishCard>)
           }
        </div>
       </div>
    );
};

export default Wishlists;