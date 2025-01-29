import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import OrdersPage from './pages/OrdersPage'
import AddressListPage from './pages/AddressListPage'

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='/address-list' element={<AddressListPage />} />
      </Routes>
    </div>
  )
}

export default App