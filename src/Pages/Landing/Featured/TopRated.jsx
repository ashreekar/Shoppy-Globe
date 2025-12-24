import { useState,useEffect } from "react";
import ProductCard from "./ProductCard";

function TopRated({data}) {
  // componet shows top rated items on landing page
const [rated, setRated] = useState([]);

  useEffect(() => {
      if (data) {
        // sorts based on rating
        let val = [...data].sort((first, second) => {
          return Number(second.rating) - Number(first.rating);
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
            return <ProductCard key={item._id} product={item} aspect={"rating"} />
          })
        }
      </div>
    </div>
  )
}

export default TopRated