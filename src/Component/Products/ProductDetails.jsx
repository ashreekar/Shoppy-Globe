import { useParams } from "react-router-dom"
import { useFetch } from "../../utils/useFetch";
import { Loading, ErrorFetch } from "../"
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { ProductCartDetails } from "../";

function ProductDetails() {
  const param = useParams();
  const url = "http://localhost:3000/products"

  const { data, error, loading } = useFetch(`${url}/${param.productid}`);

  const [renderData, setRenderData] = useState({});

  useEffect(() => {
    if (data) {
      setRenderData(data);
    }
    console.log(data);
  }, [param, data])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorFetch />
  }

  return (
    <div className="flex gap-3 w-[100%] justify-evenly items-center h-[75vh]">
      <div className="rounded-lg shadow-2xl h-[90%] justify-center">
        <img src={data.images[0]} alt={data.title} onError={(e) => {
          e.target.src = "/logo.png"
        }} height="250px" width="250px" className="h-full object-fit rounded-t-xl" />
      </div>

      <div className="flex flex-col gap-3 w-[45vw]">
        <h2 className="font-bold text-2xl">{data.title}</h2>
        <p className="text-gray-600 font-medium">from <span className="text-blue-700 font-medium">{data.brand}</span></p>

        <div className="flex gap-3">
          {
            data.tags.map((tag, idex) => {
              return (
                <p className="bg-blue-800 rounded-2xl text-white font-bold py-1 px-2" key={tag}>
                  {tag}
                </p>
              )
            })
          }
        </div>

        <div className={`${data.rating >= 4 ? "bg-green-600" : data.rating >= 3 ? "bg-orange-500" : "bg-red-500"} flex items-center gap-1 px-2 py-1 rounded-sm w-fit`}>
          <FaStar className="text-white text-xs" />
          <span className="text-white text-sm font-medium">{data.rating}</span>
        </div>

      <div className='text-lg font-medium flex text-center flex-row items-center gap-4 mt-2'>
        <p className='text-black text-xl'>$ {data.price}</p>
        <p className='text-gray-500 line-through text-medium'>{(data.discountPercentage + data.price).toFixed(2)}</p>
      </div>
      <div>

        <div>
          <h3 className="font-bold text-lg">Description:</h3>
          <ul className="font-medium text-justify">
            {
              data.description.split(".").map((sent)=>{
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
        <ProductCartDetails product={data} />
      </div>
    </div>
  )
}

export default ProductDetails