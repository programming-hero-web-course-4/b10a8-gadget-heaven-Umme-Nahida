import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([])
    const [filter,setFilter] = useState([])
    console.log(gadgets)
    useEffect(() => {
        fetch('./gadgetsData.json')
            .then(res => res.json())
            .then(data => {
                setGadgets(data)
                setFilter(data)
            })
    }, [])
 
   
    
    const filteredCategory = (category)=>{
        if(category === "All"){
           setFilter(gadgets)
        }else{
            const filterData = gadgets?.filter(gadget=>gadget.category === category)
            setFilter(filterData)
        }
    }


    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-8'>Explore Cutting-Edge Gadgets</h2>
            <div className='grid grid-cols-1  lg:grid-cols-4'>
                <div className='flex flex-col gap-5 w-2/3'>
                   <button onClick={()=>filteredCategory('All')} className='rounded-full cursor-pointer px-5 py-2 bg-slate-200 hover:bg-purple-600 hover:text-white'>All Product</button>
                   <button onClick={()=>filteredCategory('Laptop')}  className='rounded-full cursor-pointer px-5 py-2 bg-slate-200 hover:bg-purple-600 hover:text-white'>Laptops</button>
                   <button onClick={()=>filteredCategory('Smartphone')} className='rounded-full cursor-pointer px-5 py-2 bg-slate-200 hover:bg-purple-600 hover:text-white '>Phones</button>
                   <button onClick={()=>filteredCategory('Smartphone')} className='rounded-full cursor-pointer px-5 py-2 bg-slate-200 hover:bg-purple-600 hover:text-white'>Accesories</button>
                   <button onClick={()=>filteredCategory('Smartwatch')} className='rounded-full cursor-pointer px-5 py-2 bg-slate-200 hover:bg-purple-600 hover:text-white'>Smart Wacthes</button>
                   <button onClick={()=>filteredCategory('Drone')} className='rounded-full cursor-pointer px-5 py-2 bg-slate-200 hover:bg-purple-600 hover:text-white'>Drone</button>
                   <button onClick={()=>filteredCategory('Headphones')} className='rounded-full cursor-pointer px-5 py-2 bg-slate-200 hover:bg-purple-600 hover:text-white'>Headphones</button>
                </div>
                <div className='col-span-3'>
                    <div className='grid grid-cols-3 gap-10'>
                        {
                            filter?.map(gadget => <Gadget gadget={gadget} key={gadget.id}></Gadget>) 
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
