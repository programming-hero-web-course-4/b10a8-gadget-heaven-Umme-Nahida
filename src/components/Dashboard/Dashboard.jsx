import React, { useEffect, useState } from 'react';
import Wishlists from '../Wishlists/Wishlists';
import Carts from '../Carts/Carts';
import { useLoaderData } from 'react-router-dom';
import { getStoredCartList } from '../../utility/addToDatabase';
import { getStoreWishlist } from '../../utility/addToWishlitDB';

const Dashboard = () => {
    const allGadgets = useLoaderData()
    const [cart,setCart]=useState([])
    const [wish,setWish]=useState([])
    
    
    useEffect(()=>{
         const storedCartList= getStoredCartList()
         const storeWishList = getStoreWishlist()
         const storeWishListInt = storeWishList?.map(id=>parseInt(id))
         const wishList = allGadgets?.filter(gadget=>storeWishListInt.includes(gadget?.id))
         const storedCartListInt = storedCartList?.map(id => parseInt(id))
         console.log(storedCartList,storedCartListInt,allGadgets)
        //  const wishlist = allGadgets.filter()
         const cartList = allGadgets?.filter(gadget => storedCartListInt.includes(gadget.id))
         setCart(cartList)
         setWish(wishList)
         
    },[])

    
    const [open, setOpen] = useState(false)
    console.log(cart)
    return (
        <div>
            <div className='bg-purple-600 p-20 text-center rounded-md text-white'>
                <h2 className='text-2xl font-bold'>Dashboard </h2>
                <p className='max-w-2/3 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className='flex items-center justify-center pt-5 gap-x-2'>
                    <button onClick={() => setOpen(false)} className='rounded-full cursor-pointer border-2 border-white text-white hover:bg-white hover:text-purple-600 px-5 py-2 '>Cart</button>
                    <button onClick={() => setOpen(true)} className='rounded-full cursor-pointer border-2 border-white text-white hover:bg-white hover:text-purple-600 px-5 py-2 '>Wishlist</button>
                </div>
            </div>


            {/* cart items */}

            {/* wish list items  */}
            {
                open ?
                    <div>
                        {
                            wish?.length > 0 ? 
                            <Wishlists wishList={wish}></Wishlists> :
                            <div>
                                <h1>Your have not any wish List product</h1>
                            </div>
                        }
                    </div> 
                    :
                    <div>

                       {
                          cart?.length > 0 ? 

                          <Carts carts={cart} setCarts={setCart}></Carts> :
                          <div>
                                <h1>Your have not any cart product</h1>
                            </div>
                       }

                    </div>

            }
        </div>
    );
};

export default Dashboard;