import DashboardPageHeader from '@component/layout/DashboardPageHeader'
import VendorDashboardLayout from '@component/layout/VendorDashboardLayout'
import VendorOrderList from '@component/orders/VendorOrderList'
import ShoppingBag from '@material-ui/icons/ShoppingBag'
import React from 'react'

const Orders = () => {
  return (
    <VendorDashboardLayout>
      <DashboardPageHeader title="Orders" icon={ShoppingBag} />
      <VendorOrderList />
    </VendorDashboardLayout>
  )
}

export default Orders
