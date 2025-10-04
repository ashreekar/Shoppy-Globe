import React from 'react'

function ProductItem({ item }) {

    return (
        <div className='flex flex-col h-70 w-[75vw] sm:w-[40vw] lg:w-[25vw] rounded-xl border-2 shadow-md border-white hover:border-blue-500 transition duration-150'>
            <div className='h-[50%] w-[90%] flex justify-center'>
                <img src={item.thumbnail} alt={item.title} className='h-full w-auto object-fit rounded-t-xl' />
            </div>
            <h3 className='text-xl font-bold text-center'>{item.title}</h3>
            <div className='text-lg font-medium flex text-center flex-col'>
                <p>{item.price}</p>
                <p>{item.rating}</p>
            </div>
        </div>
    )
}

export default ProductItem