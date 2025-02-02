import React from 'react';
import Cart from '../Cart/Cart';
import group from "../../assets/Group.png"

const Carts = ({ carts,setCarts }) => {
    console.log(carts)

    const handleSort =()=>{
        const sortCartList = [...carts].sort((a,b)=>b.price - a.price)
        setCarts(sortCartList)

    }

    return (
        <div className="my-10">
            <div className="flex item-center justify-end gap-5">
            <h1 className='text-xl md:text-2xl'>Carts List: </h1>
            <button onClick={handleSort} className='cursor-pointer border-2 border-purple-600 px-5 py-2 rounded-full'>Sort by Price</button>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Purchase</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box text-center">
                    <img className='mx-auto text-center' src={group} alt="" />
                    <h3 className="font-bold text-lg">Payment Successfully</h3>
                    <p className="py-4">Thanks for purchasing. Total:2449.96 </p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            </div>




            {/* cart items */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 items-end justify-center'>
                {
                    carts?.map(cart => <Cart key={cart?.id} cart={cart}></Cart>)
                }
            </div>
        </div>
    );
};

export default Carts;