import ProductItem from "./ProductItem"

function ProductList({ renderProducts }) {
  console.log(renderProducts)
  return (
    <div className='flex flex-wrap gap-6 items-center justify-center mt-10 pl-10 pr-10'>
      {
        renderProducts.map((product) => {
          return (
            <ProductItem key={product.id} product={product} />
          )
        })
      }
    </div>
  )
}

export default ProductList