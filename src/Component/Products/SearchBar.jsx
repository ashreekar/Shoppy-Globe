import { useSelector } from "react-redux";
import { useState } from "react";

function SearchBar({ renderingDataChanges }) {
  const products = useSelector(state => state.product.products);
  const [searchValue, setsearchValue] = useState("");

  function searchAndReturnProducts() {
    const toSet = products.filter((item) => {
      return item.title.includes(searchValue);
    })

    renderingDataChanges(toSet);
  }

  return (
    <div className="flex mt-4 w-[90vw] max-w-3xl mx-auto items-center gap-0 justify-center h-10">
      <input
        type="text"
        placeholder="Search any product..."
        value={searchValue}
        onChange={(e) => {
          setsearchValue(e.target.value);
          if (e.target.value === "") {
            renderingDataChanges("");
          }
        }}
        className="flex-1 px-4 py-2 rounded-l-2xl border-2 border-blue-600 focus:border-none focus:ring-2 focus:ring-blue-200 outline-none transition duration-200"
      />
      <button
        onClick={() => searchAndReturnProducts()}
        className="px-6 py-2 rounded-r-2xl bg-blue-600 text-white font-medium hover:bg-blue-700 active:bg-blue-800 transition duration-200 border-2 border-blue-600 cursor-pointer"
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar