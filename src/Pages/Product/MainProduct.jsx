import { useEffect, useState } from "react";
import { SearchBar, ProductList, Loading, ErrorFetch } from "../../Component"
import { useFetch } from "../../utils/useFetch.js";
import { useDispatch } from "react-redux";
import { addProduct } from "../../stateUtils/productSlice.js";

function MainProduct() {
    const url = "http://localhost:3000/products";
    const { data, error, loading } = useFetch(url);

    const [renderProducts, setRenderProducts] = useState(data);

    const dispatch = useDispatch();

    useEffect(() => {
        // data is in my store as ProductSlice to use select in searchbar
        if (data) {
            setRenderProducts(data);
            dispatch(addProduct(data));
        } else {
            setRenderProducts([]);
            dispatch(addProduct([]));
        }
    }, [data])

    function renderingDataChanges(val){
        if(val.length === 0){
            setRenderProducts(data);
        }else{
            setRenderProducts(val);
        }
    }

    // NOTE : No need of cart data as it is only need in 
    //        incrementdecrement counter not in productitem

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <ErrorFetch />
    }

    return (
        <>
            <SearchBar renderingDataChanges={renderingDataChanges} />
            <ProductList renderProducts={renderProducts} />
        </>
    )
}

export default MainProduct