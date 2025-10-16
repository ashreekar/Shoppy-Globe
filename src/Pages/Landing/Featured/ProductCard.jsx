import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function ProductCard({ product, aspect }) {
    return (
        <div className="flex flex-col w-[150px] sm:w-[180px] lg:w-[200px] rounded-lg shadow hover:shadow-lg transition p-2 bg-white">
            <NavLink to={`../products/${product.id}`} className="flex flex-col items-center">
                {
                    aspect === "discount" ? (
                        <p className="text-green-600 font-medium text-lg mb-4">
                            Save {product.discountPercentage}% today!
                        </p>
                    ) : (<div className={`text-lg px-3 py-1 mt-1 text-yellow-400 flex items-center gap-1`}>
                        <FaStar className="text-[16px]" />
                        <span className="font-semibold">{product.rating}</span>
                    </div>)
                }
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    onError={(e) => { e.target.src = "/logo.png" }}
                    className="h-[100px] w-auto object-cover rounded-md"
                    loading="lazy"
                />

                <h3 className="text-sm font-semibold text-center mt-1">{product.title}</h3>

                <div className="text-xs flex items-center justify-between w-full mt-1">
                    <p className="font-bold">${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}</p>
                    <p className="text-gray-400 line-through">{product.price.toFixed(2)}</p>
                </div>
            </NavLink>
        </div>

    )
}

export default ProductCard