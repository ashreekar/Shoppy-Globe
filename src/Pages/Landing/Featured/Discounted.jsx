import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";

function Discounted({ data }) {
  const [discounted, setDiscounted] = useState([]);

  useEffect(() => {
    if (data) {
      let val = [...data].sort((first, second) => {
        return second.discountPercentage - first.discountPercentage;
      })

      setDiscounted(val);
    }
  }, [data])

  return (
    <div className="flex flex-col mt-4">
      <p className="text-xl font-bold">Top on discounts</p>
      <div className="mt-2 flex flex-wrap gap-4">

        {
          discounted.filter((item, index) => index < 5).map((item) => {
            return <ProductCard key={item.id} product={item} aspect={"discount"} />
          })
        }
      </div>
    </div>
  )
}

export default Discounted