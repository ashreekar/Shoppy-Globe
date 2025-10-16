import { lazy, useEffect, useState } from "react";
import SearchBar from "../../Component/Products/SearchBar.jsx"
import ProductList from "../../Component/Products/ProductList.jsx"
import Loading from "../../Component/LoadAndError/Loading.jsx"
import { useFetch } from "../../utils/useFetch.js";
import { useDispatch,useSelector } from "react-redux";
import { addProduct } from "../../stateUtils/productSlice.js";
import NotFound from "../../Component/404/NotFound.jsx"

const ErrorFetch=lazy(()=>import("../../Component/LoadAndError/ErrorFetch.jsx"));

function MainProduct() {
    const url = "https://dummyjson.com/products";
    const { data, error, loading, notFound=false } = useFetch(url);

    // subscribing to cart slice because need to show total cart cost
    const cost=useSelector(state=>state.cart.cost);

    const [renderProducts, setRenderProducts] = useState(data);

    // sets the product in product store for first time
    const dispatch = useDispatch();

    useEffect(() => {
        // data is in my store as ProductSlice to use select in searchbar
        if (data?.products) {
                // sets the product in product store for first time and sets for render
            setRenderProducts(data.products);
            dispatch(addProduct(data.products));
        } else {
            setRenderProducts([]);
            dispatch(addProduct([]));
        }
    }, [data])

    function renderingDataChanges(val){
        // function that sets rendering data on search
        if(val===""){
            setRenderProducts(data?.products || []);
        }else if(val.length===0){
            setRenderProducts([]);
        }
        else{
            setRenderProducts(val);
        }
    }

    // NOTE : No need of cart data as it is only need in 
    //        incrementdecrement counter not in productitem

    // rendering exceptions and eror and loading states

    if (loading) {
        return <Loading />
    }

      if(notFound){
        return <NotFound/>
    }

    if (error) {
        return <ErrorFetch />
    }

    return (
        <>
            <SearchBar renderingDataChanges={renderingDataChanges} />
             <div className='flex justify-between'>
                <p className='text-md text-gray-700 mt-2 pl-10'>Showing <span className='font-bold'>{renderProducts.length}</span> results</p>
                <p className='text-md text-gray-700 mt-2 pr-10'>Your total cart cost: <span className='font-bold'>{cost.toFixed(2)}</span> </p>
            </div>
            {
                renderProducts.length===0?<div className="h-[70vh] flex items-center justify-center"><p className="text-2xl font-bold text-gray-700">Product you are looking for is not found</p></div>:<ProductList renderProducts={renderProducts} />
            }
        </>
    )
}

export default MainProduct