import React, { useEffect, useState } from 'react'
import { useFetch } from '../../utils/useFetch';
import {ProductItem} from '../index.js'

function ProductList() {
    const url = "http://localhost:3000/products";
    // actual url
    // https://dummyjson.com/products'
    const [fetcheddata, setfetcheddata] = useState([]);

    const { data, err, loading } = useFetch(url);

    useEffect(() => {
        if (data) {
            setfetcheddata(data);
        }
    }, [data])


    if (err) {
        return (
            <div>
                <p>Error while fetching</p>
            </div>
        )
    }

    if (loading) {
        return (
            <div className='flex items-center justify-center'>
                <p className='text-3xl animate-ping transition duration-150'>Loading....</p>
            </div>
        )
    }

    return (
        <div className='flex flex-wrap gap-6 items-center justify-center mt-16'>
            {
                fetcheddata.map((item) => {
                    return <ProductItem key={item.id} item={item} />
                })
            }
        </div>
    )
}

export default ProductList