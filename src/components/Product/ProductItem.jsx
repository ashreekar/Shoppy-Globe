import React, { useState } from 'react'
import { FaStar, FaPlus, FaMinus } from 'react-icons/fa'

function ProductItem({ item }) {
    const [quantity, setQuantity] = useState(0);

    return (
        <div className='flex flex-col h-100 w-[75vw] sm:w-[40vw] lg:w-[25vw] rounded-xl border-2 shadow-md border-white hover:border-blue-500 transition duration-150 items-center'>
            <div className='h-[50%] w-[90%] flex justify-center'>
                <img src={item.thumbnail} alt={item.title} className='h-full w-auto object-fit rounded-t-xl' />
            </div>
            <div className='flex flex-col items-center gap-1.5'>
                <h3 className='text-2xl font-bold text-center'>{item.title}</h3>
                <div className={`${item.rating > 3.5 ? "bg-green-600" : item.rating > 3 ? "bg-orange-500" : "bg-red-500"} flex items-center gap-1 px-2 py-1 rounded-sm w-fit`}>
                    <FaStar className="text-white text-xs" />
                    <span className="text-white text-sm font-medium">{item.rating}</span>
                </div>
            </div>

            <div className='text-lg font-medium flex text-center flex-row items-center justify-between gap-4 mt-2'>
                <p className='text-black text-xl'>$ {item.price}</p>
                <p className='text-gray-500 line-through text-medium'>{(item.discountPercentage + item.price).toFixed(2)}</p>
            </div>

            <div className='flex justify-between'>
                <button className={`px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 cursor-pointer py-2.5 focus:ring-1 focus:ring-blue-200"} ${quantity===0?"visible":"hidden"}`} onClick={() => setQuantity(quantity + 1)}>Add to cart</button>

                <div className={`flex items-center w-auto justify-evenly gap-2 py-2.5 px-5 me-2 mb-2 mt-2 ${quantity === 0 ? "hidden" : "visible"}`}>
                    <button className={`px-3 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 cursor-pointer py-1`}>Buy Now</button>

                    <button
                        onClick={() =>{
                            setQuantity(quantity === 0 ? 0 : quantity - 1);
                        } }
                        className="px-2 py-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded-full"
                    >
                        <FaMinus />
                    </button>

                    <input
                        type="number"

                        value={quantity}
                        onChange={(e) => {
                            let value = e.target.value;
                            if (value === "") {
                                setQuantity(1);
                                return;
                            }
                            if (quantity >= 1) {
                                setQuantity(parseInt(e.target.value));
                            }
                        }}
                        className="w-10 text-center border-2 border-blue-500 font-medium text-blue-600 bg-white rounded-md"
                    />

                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-2 py-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded-full"
                    >
                        <FaPlus />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem