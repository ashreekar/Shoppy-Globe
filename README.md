# Book Store Application using React

---

## 📝 GitHub Link

https://github.com/ashreekar/Shoppy-Globe
---

## 📌 Overview

This is an **Ecommerce application frontend** built using **React (Vite)**.
The app have fucntionality of:

* Search for products
* Can add products to cart
* Can delete products from cart
* Can delete whole cart itself
* Can browse the top discounted/ top rated products
* Error route handling
* Can buy after filling a simple form

It uses **functional components, useState, and redux-toolkit and  react-redux** to handle data flow and state management.

---

## ⚙️ Features

* ✅ Created components like App, Header, ProductList, ProductItem, Car,CartItem,NotFound 
* ✅ Created supporting pages and extra components
* ✅ Created a dummy form for checkout and on checkout cart is cleared
* ✅ Used props to pass data from parent ot child components 
* ✅ Created a useFetch hook to call api and manage states, laoding and error parts
* ✅ Included redux store and porduct and cart slice for better and efficient state management 
* ✅ Added rounting features for checkout, home, cart, product pages and implemented dynamic routing for product details
* ✅ Rendered ProductItem and cartItems as list and provided unique keys
* ✅ Added lazy loading and suspence fallback for componets and images as well
* ✅ Added a 404 Error page for handling unknown routes.
* ✅ Clean and responsive UI

---

## 🏗️ Project Structure

```
bookstore/
├── public/
├── src/
│   ├── components/
│   │   ├── 404
│   │   ├── Cart
│   │   ├── counter
│   │   ├── HeaderandFooter
│   │   ├── LoadAndError
│   │   ├── Products
│   ├── pages/
│   │   ├── Checkout
│   │   ├── Lanidng
│   │   ├── Product
│   ├── utils/
│   │   ├── useFetch.js
│   ├── stateUtil/
│   │   ├── cartSlice.js
│   │   ├── productSlice.js
│   │   ├── shopStore.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── package.json
├── index.html
├── vite.config.js
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ashreekar/Shoppy-Globe.git
cd shoppy-globe
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Application

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎨 Styling

* Styled with **CSS / Tailwind** for a user-friendly interface.

---

## 📜 Assignment Requirements Covered

✔️ React app created with **Vite**
✔️ Components: App, Products, ProductItem, Cart, CartItem, NotFound, Header.
✔️ State management using redux implemented
✔️ Used props for passing data from parent to child component
✔️ Added dynamic routing for product details
✔️ Event handling and error message
✔️ Added search bar for searching by product name
✔️ Added error page 404 not found page
✔️ Styled for better user experience
✔️ README with setup instructions