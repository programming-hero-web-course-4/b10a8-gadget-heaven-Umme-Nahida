import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([])
    console.log(gadgets)
    useEffect(() => {
        fetch('./gadgetsData.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])

    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>Explore Cutting-Edge Gadgets</h2>
            <div className='grid grid-cols-1  lg:grid-cols-4'>
                <div className='flex flex-col gap-5 w-2/3'>
                   <button className='rounded-full px-5 py-2 bg-slate-200 hover:bg-purple-600 hover:text-white'>All Product</button>
                   <button className='rounded-full px-5 py-2 bg-slate-200 hover:bg-purple-600 hover:text-white'>Laptops</button>
                   <button className='rounded-full px-5 py-2 bg-slate-200 hover:bg-purple-600 hover:text-white '>Phones</button>
                   <button className='rounded-full px-5 py-2 bg-slate-200 hover:bg-purple-600 hover:text-white'>Accesories</button>
                   <button className='rounded-full px-5 py-2 bg-slate-200 hover:bg-purple-600 hover:text-white'>Smart Wacthes</button>
                   <button className='rounded-full px-5 py-2 bg-slate-200 hover:bg-purple-600 hover:text-white'>Macbook</button>
                   <button className='rounded-full px-5 py-2 bg-slate-200 hover:bg-purple-600 hover:text-white'>Iphone</button>
                </div>
                <div className='col-span-3'>
                    <div className='grid grid-cols-3 gap-10'>
                        {
                            gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.id}></Gadget>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadgets;

// there is 4 step to load data
// 1. create state to store data
