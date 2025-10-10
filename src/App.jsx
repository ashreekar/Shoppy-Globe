import { Outlet } from 'react-router-dom'
import Header from "./Component/HeaderandFooter/Header.jsx"
import Footer from "./Component/HeaderandFooter/Footer.jsx"
import { Provider } from 'react-redux'
import shopStore from "./stateUtils/shopStore.js"

function App() {
  return (
    <Provider store={shopStore}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  )
}

export default App