import React from 'react'

function ProductItem({item}) {

  return (
    <div className='flex flex-col h-70 w-[75vw] sm:w-[45vw] lg:w-[30vw] rounded-xl border-2 shadow-md border-white hover:border-blue-500 transition duration-150'>
        <div className='h-[50%] w-[90%]'>
            <img src={item.thumbnail} alt={item.title} height="50%" width="90%" />
        </div>
        <h3 className='text-xl font-bold text-center'>{item.title}</h3>
        <p>{item.price}</p>
        <p>{item.rating}</p>
    </div>
  )
}

export default ProductItem