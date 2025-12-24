import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";

function Discounted({ data }) {
  // componet shows discounted uetms on landing page
  const [discounted, setDiscounted] = useState([]);

  useEffect(() => {
    if (data) {
      // searches for top discounted
      let val = [...data].sort((first, second) => {
        return Number(second.discountPercentage) - Number(first.discountPercentage);
      })

      setDiscounted(val);
    }
  }, [data])

  return (
    <div className="flex flex-col mt-4">
      <p className="text-xl font-bold">Top on discounts</p>
      <div className="mt-2 flex flex-wrap gap-4">

        {
          // only gives top 5 discounted
          discounted.filter((item, index) => index < 5).map((item) => {
            return <ProductCard key={item._id} product={item} aspect={"discount"} />
          })
        }
      </div>
    </div>
  )
}

export default Discounted