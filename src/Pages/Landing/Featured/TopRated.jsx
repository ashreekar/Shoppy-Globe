import { useState,useEffect } from "react";
import ProductCard from "./ProductCard";

function TopRated({data}) {
const [rated, setRated] = useState([]);

  useEffect(() => {
      if (data) {
        let val = [...data].sort((first, second) => {
          return second.rating - first.rating;
        })
  
        setRated(val);
      }
    }, [data])
  return (
        <div className="flex flex-col mt-4">
      <p className="text-xl font-bold">Top on ratings</p>
      <div className="mt-2 flex flex-wrap gap-4">

        {
          rated.filter((item, index) => index < 5).map((item) => {
            return <ProductCard key={item.id} product={item} aspect={"rating"} />
          })
        }
      </div>
    </div>
  )
}

export default TopRated