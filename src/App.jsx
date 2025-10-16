import { Outlet } from 'react-router-dom'
import Header from "./Component/HeaderandFooter/Header.jsx"
import Footer from "./Component/HeaderandFooter/Footer.jsx"
import { Provider } from 'react-redux'
import shopStore from "./stateUtils/shopStore.js"

function App() {
  return (
    // Added the store of shopStore which is the main and single store in project
    <Provider store={shopStore}>
      <Header />
      {/* Dynamic compos and routes are in outlet */}
      <Outlet />
      <Footer />
    </Provider>
  )
}

export default App