import { useParams } from "react-router-dom"
import { useFetch } from "../../utils/useFetch";
import ErrorFetch from "../LoadAndError/ErrorFetch"
import Loading from "../LoadAndError/Loading"
import { FaStar } from "react-icons/fa";
import ProductCartDetails from "./ProductCartDetails";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { apiurl } from "../../utils/apiurl.js"

function ProductDetails() {
  // using useParams() from dynamic routing finding
  const param = useParams();
  const url = `${apiurl}/products`;

  // fetching perticular product by calling api
  const { data, error, loading } = useFetch(`${url}/${param.productid}`);

  // handling load and eror states
  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorFetch />
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10 w-full justify-evenly items-center min-h-[80vh] px-8 py-10 bg-gray-50 rounded-lg shadow-xl">
      <div className="flex justify-center items-center bg-white rounded-2xl shadow-lg border border-gray-100 p-4 w-[300px] h-[300px]">
        {/* <img src={data.images[0]} alt={data.title} onError={(e) => {
          e.target.src = "/logo.png"
        }} height="250px" width="250px" className="h-full object-fit rounded-t-xl" /> */}

        {/*  Implememting lazy laod images */}
        <LazyLoadImage
          height="250px" width="250px"
          alt={data.data.title}
          className="h-full object-contain rounded-t-xl"
          src={data.data.images[0]}
          onError={(e) => {
            e.target.src = "/logo.png"
          }} />
      </div>

      <div className="flex flex-col gap-3 w-[45vw]">
        <h2 className="font-bold text-2xl">{data.data.title}</h2>
        <p className="text-gray-600 font-medium">from <span className="text-blue-700 font-medium">{data.data.brand || data.data.title}</span></p>

        <div className="flex flex-wrap gap-2 mt-2">
                <p className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full border border-blue-300">
                  {data.data.category}
                </p>
        </div>

        <div className={`${data?.data.rating >= 4 ? "bg-green-600" : data.data.rating >= 3 ? "bg-orange-500" : "bg-red-500"} flex items-center gap-1 px-2 py-1 rounded-sm w-fit`}>
          <FaStar className="text-white text-xs" />
          <span className="text-white text-sm font-medium">{data.data.rating}</span>
        </div>

        <div className='text-lg font-medium flex text-center flex-row items-center gap-4 mt-2'>
          <p className="text-2xl font-semibold text-gray-900">$ {(Number(data.data.price) * (1 - (Number(data.data.discountPercentage) / 100))).toFixed(2)}</p>
          <p className="text-gray-400 line-through text-lg">
            ${Number(data.data.price).toFixed(2)}
          </p>
          <p className="text-green-600 font-medium text-sm">
            Save {data.data.discountPercentage}% today!
          </p>
        </div>
        <div>
          {/* Adding the description in bullet poins*/}
          <div>
            <h3 className="font-bold text-lg">Description:</h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
              {
                data.data.description?.split(".")?.filter((sent) => sent.trim().length > 0).map((sent) => {
                  return (
                    <li key={sent}>{sent}</li>
                  )
                })
              }
            </ul>
          </div>

        </div>
      </div>

      <div>
        <ProductCartDetails product={data.data} />
      </div>
    </div>
  )
}

export default ProductDetails