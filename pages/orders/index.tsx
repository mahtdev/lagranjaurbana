import CustomerDashboardLayout from '@component/layout/CustomerDashboardLayout'
import CustomerOrderList from '@component/orders/CustomerOrderList'
import React from 'react'

const Orders = () => {
  return (
    <CustomerDashboardLayout>
      <CustomerOrderList />
    </CustomerDashboardLayout>
  )
}

export default Orders
