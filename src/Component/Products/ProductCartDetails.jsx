import IncreDecreCounter from "../counter/IncreDecreCounter";
import { useDispatch,useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { addFirst,addByOne,removeByOne,removeCompletly } from "../../stateUtils/cartSlice";

function ProductCartDetails({ product }) {
    const [quantity, setQuantity] = useState(0);

    const dispatch = useDispatch();
    const item = useSelector(state => state.cart.cart);

    useEffect(() => {
        const val = item.find((val) => {
            return val.id === product.id;
        })

        setQuantity(val?.cartQuantity || 0);
    }, [product, item])

    const addFirstProductCart = () => {
        dispatch(addFirst(product));
    }

    const addOneCart = () => {
        dispatch(addByOne(product));
    }

    const deleteOneCart = () => {
        if (quantity === 1) {
            dispatch(removeCompletly(product));
        } else {
            dispatch(removeByOne(product));
        }
    }

    return (
        <div>
            <button className={`px-5 me-2 mb-2 mt-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 cursor-pointer py-2.5 focus:ring-1 focus:ring-blue-200"} ${quantity === 0 ? "block" : "hidden"}`} onClick={addFirstProductCart}>Add to cart</button>

            <IncreDecreCounter quantity={quantity} addOneCart={addOneCart} deleteOneCart={deleteOneCart} view={true} />
        </div>
    )
}

export default ProductCartDetails