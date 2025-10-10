import { useSelector, useDispatch } from "react-redux";

function CheckoutPage() {
  const cart=useSelector(state=>state.cart.cart);
  const cost=useSelector(state=>state.cart.cost);

  if(cart.length===0){
    return (
      <div>
        <p>Your cart is empty</p>
        <button>Go shop now</button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center pb-20 pt-4 px-4">
      <div className="w-[90%]">
      <h1 className="text-xl sm:text-4xl font-bold mb-2 text-blue-800 text-start">
        Checkout :
      </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full max-w-5xl">
        <div className="rounded-xl shadow-md border border-gray-200">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Billing Information
            </h2>
            <form className="space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="p-2 border rounded-lg w-full focus:ring focus:ring-blue-200"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="p-2 border rounded-lg w-full focus:ring focus:ring-blue-200"
                />
              </div>

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="p-2 border rounded-lg w-full focus:ring focus:ring-blue-200"
              />

              <textarea
                name="address"
                placeholder="Adress line 1"
                rows="1"
                className="p-2 border rounded-lg w-full focus:ring focus:ring-blue-200"
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="p-2 border rounded-lg w-full focus:ring focus:ring-blue-200"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  className="p-2 border rounded-lg w-full focus:ring focus:ring-blue-200"
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  className="p-2 border rounded-lg w-full focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-gray-600">Payment Method</h3>
                <select
                  name="paymentMethod"
                  className="p-2 border rounded-lg w-full focus:ring focus:ring-blue-200"
                >
                  <option value="cod">Cash on Delivery</option>
                  <option value="card">Credit / Debit Card</option>
                  <option value="upi">UPI / Net Banking</option>
                </select>
              </div>

              <button
                type="button"
                className="w-full py-1 mt-4 text-white bg-blue-600 hover:bg-blue-700 rounded-xl"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>

        <div className="rounded-2xl shadow-md border border-gray-200">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Order Summary
            </h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>{cost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>$50</span>
              </div>
              <div className="flex justify-between">
                <span>Discount:</span>
                <span>-$100</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>$ {(cost+50).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`fixed inset-0 bg-black/50 items-center justify-center z-50 hidden`}>
        <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] sm:w-[400px] text-center">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">
            Order Placed!
          </h3>
          <p className="text-gray-600 mb-6">
            Thank you for shopping with us. Your order has been placed successfully.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;